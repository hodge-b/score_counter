import React,{useState, useEffect} from 'react';
import Modal from './modals//Modal';
import { StyledMainView } from './styled/MainView.styled';
import { createNewPlayer, getAppDataFromStorage, setAppDataToStorage, deletePlayer } from '../utilities/functions';

import {newGameModal, gameListModal, playerListModal, appInfoModal, addPlayerModal, partySelectionModal} from '../utilities/modalContent';
import { useAppStateContext, useAppStateUpdateContext } from '../contexts/AppStateProvider';
import { useAddPlayerContext, useAddPlayerUpdateContext } from '../contexts/AddPlayerProvider';


export default function MainView(){

    // create context states
    const app = useAppStateContext();
    const setApp = useAppStateUpdateContext();
    const playerName = useAddPlayerContext();
    const setPlayerName = useAddPlayerUpdateContext();

    const modalView = app && app.app.modalView;
    
    // handler for main menu buttons
    const handleButtons = e => {
        const buttonName = e.target.className;
        
        switch(buttonName){
            case 'btn--new-game':
                setApp(prevState => ({
                    ...prevState, app:{
                        ...prevState.app,
                        modalView:{
                            ...prevState.app.modalView,
                            newGame: true
                        }
                    }
                }))
                break;
            case 'btn--game-list':
                setApp(prevState => ({
                    ...prevState, app:{
                        ...prevState.app,
                        modalView:{
                            ...prevState.app.modalView,
                            gameList: true
                        }
                    }
                }))
                break;
            case 'btn--player-list':
                setApp(prevState => ({
                    ...prevState, app:{
                        ...prevState.app,
                        modalView:{
                            ...prevState.app.modalView,
                            playerList: true
                        }
                    }
                }))
                break;
            case 'btn--continue':
                console.log(buttonName);
                break;
            case 'btn--app-info':
                setApp(prevState => ({
                    ...prevState, app:{
                        ...prevState.app,
                        modalView:{
                            ...prevState.app.modalView,
                            appInfo: true
                        }
                    }
                }))
                break;
            default:
                console.log(buttonName);
                break;
        }
    }

    // handler for exit of modals
    const handleModalExit = () => {
        setApp(prevState => ({
            ...prevState, app:{
                ...prevState.app,
                modalView:{
                    ...prevState.app.modalView,
                    newGame: false,
                    gameList: false,
                    playerList: false,
                    appInfo: false,
                    addPlayer: false,
                    partySelection: false,
                }
            },
            currentParty:[]
        }))
    }

    // handler for main modal button
    const handleModalButtonClick = e => {
        const buttonName = e.target.className;
        
        switch(buttonName.split(' ')[0]){
            case 'btn--create-game':
                setApp(prevState => {return{...prevState, app:{
                    ...prevState.app,
                    modalView:{
                        ...prevState.app.modalView,
                        newGame: false,
                        partySelection: true
                    }
                }}})
                break;

            case 'btn--start-game':
                if(app.currentParty.length >= 2){
                    setApp(prevState => {return{...prevState, app:{
                        ...prevState.app,
                        isGameAlive: true,
                        modalView:{
                            ...prevState.app.modalView,
                            partySelection: false
                        }
                    }}})
                }
                break;

            case 'btn--add-game':
                console.log('added game');
                break;

            case 'btn--create-player':
                setApp(prevState => ({
                    ...prevState, app:{
                        ...prevState.app,
                        modalView:{
                            ...prevState.app.modalView,
                            playerList: false,
                            addPlayer: true
                        }
                    }
                }))
                break;

            case 'btn--create-new-player':
                if(playerName !== '') createNewPlayer(setApp, playerName);
                setPlayerName('');
                setAppDataToStorage(app.players);
                setApp(prevState => ({
                    ...prevState, app:{
                        ...prevState.app,
                        modalView:{
                            ...prevState.app.modalView,
                            playerList: true,
                            addPlayer: false
                        }
                    }
                }))
                break;

            case 'btn--delete-player':
                const newPlayers = deletePlayer(app, e.target.id);
                setApp(prevApp => {
                    return{
                        ...prevApp,
                        players:[...newPlayers]
                    }
                })
                setAppDataToStorage(newPlayers)
                break;

            default:
                break;

                
        }
    }


    return(
        <StyledMainView>
        {   
            // new game modal
            app && modalView.newGame ?
                <Modal 
                    modal={newGameModal} 
                    onclick={handleModalButtonClick}
                    onExit={handleModalExit} 
                /> 
            :
                // game list modal
                app && modalView.gameList ? 
                <Modal 
                    modal={gameListModal} 
                    onclick={handleModalButtonClick}
                    onExit={handleModalExit} 
                />
                : 
                // player list modal
                app && modalView.playerList ?
                <Modal 
                    modal={playerListModal} 
                    onclick={handleModalButtonClick}
                    onExit={handleModalExit} 
                /> 
                :
                // app info modal
                app && modalView.appInfo ?
                <Modal 
                    modal={appInfoModal}
                    onclick={handleModalButtonClick}
                    onExit={handleModalExit}
                />
                :
                // add player modal
                app && modalView.addPlayer ?
                <Modal
                    modal={addPlayerModal}
                    onclick={handleModalButtonClick}
                    onExit={handleModalExit}
                />
                :
                app && modalView.partySelection ?
                <Modal
                    modal={partySelectionModal}
                    onclick={handleModalButtonClick}
                    onExit={handleModalExit}
                />
                :
                // main menu
                <div className="menu-container">
                    {false ? 
                        <button className='btn--continue' onClick={handleButtons}>Continue</button>
                        :
                        <></>
                    }
                    <button className='btn--new-game' onClick={handleButtons}>New Game</button>
                    <button className='btn--player-list' onClick={handleButtons}>Player List</button>
                    <button className='btn--app-info' onClick={handleButtons}>App Info</button>
                </div>
        }
        </StyledMainView>
    )
}
