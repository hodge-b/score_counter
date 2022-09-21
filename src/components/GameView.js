import React, {useEffect, useState} from 'react';
import { isMaxScoringReached, setStats, setupPlayerElementForRender } from '../utilities/functions';
import {useAppStateContext, useAppStateUpdateContext} from '../contexts/AppStateProvider';
import { StyledGameView } from './styled/GameView.styled';

import Toaster from './Toaster';


export default function GameView(){

    const app = useAppStateContext();
    const setApp = useAppStateUpdateContext();
    const [currentPlayers, setCurrentPlayers] = useState(app.currentParty);
    const [podiumPlayers, setPodiumPlayers] = useState([]);
    const [gameLogic, setGameLogic] = useState({
        currentRound: 1,
        maxRounds: app.gameData.currentGame.maxRounds,
        maxScoring: app.gameData.currentGame.maxScoring,
        isMaxScoringSet: app.gameData.currentGame.maxScoring !== '' ? true : false,
        isGameOver: false,
        isRoundOver: false,
        showRoundToaster: false,
        currentPlayersLeft: currentPlayers.length,
        totalPlayers: currentPlayers.length,
    });

    // check for end of turns
    useEffect(() => {
        if(gameLogic.currentPlayersLeft === 0){
            
            const sortedPlayers = currentPlayers;
            app.gameData.currentGame.isScoringAscending ? 
                sortedPlayers.sort((a,b) => a.currentGame.totalScore > b.currentGame.totalScore ? -1 : 1)
            :
                sortedPlayers.sort((a,b) => a.currentGame.totalScore > b.currentGame.totalScore ? 1 : -1)

            setGameLogic(prevLogic => {
                return{
                    ...prevLogic,
                    isRoundOver: true,
                    isGameOver: 
                        parseInt(prevLogic.maxRounds) === prevLogic.currentRound ?
                            true
                        :
                            gameLogic.isMaxScoringSet ?
                                isMaxScoringReached(prevLogic.maxScoring, currentPlayers) ?
                                    true
                                :
                                    false
                            :
                                false,
                }
            })

            setCurrentPlayers(prevPlayers => {
                return prevPlayers.map(player => {
                    return{
                        ...player,
                        currentGame:{
                            ...player.currentGame,
                            score: '',
                            isTurnOver: false,
                            position: sortedPlayers.findIndex(element => element.id === player.id) + 1
                        }
                    }
                })
            })
        }
    },[gameLogic.currentPlayersLeft])

    useEffect(() => {
        if(gameLogic.isGameOver){
            setPodiumPlayers(currentPlayers.filter(player => player.currentGame.position === 1 || player.currentGame.position === 2 || player.currentGame.position === 3));
            setGameLogic(prevLogic => {return{...prevLogic, showRoundToaster: true}});
            
            // set player stats
            setCurrentPlayers(setStats(currentPlayers));
            setApp(prevApp => {
                return{
                    ...prevApp,
                    players:[
                        ...prevApp.players,
                        
                    ]
                }
            })



            
            

        }else if(gameLogic.isRoundOver){
            setPodiumPlayers(currentPlayers.filter(player => player.currentGame.position === 1 || player.currentGame.position === 2 || player.currentGame.position === 3));
            setGameLogic(prevLogic => {return{...prevLogic, showRoundToaster: true}});
        }
    }, [gameLogic.isRoundOver])
        

    // input handlers
    const handleNewScore = e => {
        e.preventDefault();
        const inputID = e.target.id;

        setCurrentPlayers(prevPlayers => {
            return prevPlayers.map(player => {
                if(player.id === inputID && !player.currentGame.isTurnOver){
                    setGameLogic(prevLogic => {
                        return{
                            ...prevLogic,
                            currentPlayersLeft: prevLogic.currentPlayersLeft - 1
                        }
                    })
                    return{...player, currentGame:{
                        ...player.currentGame,
                        isTurnOver: true,
                        totalScore: parseInt(player.currentGame.totalScore) + parseInt(player.currentGame.score)
                    }}
                }
                return player;
            })
        });
    }

    // exit handler
    const handleOnExit = () => {
        setApp(prevState => {return{
            ...prevState, app:{
                ...prevState.app,
                isGameAlive: false
            },
            gameData:{
                ...prevState.gameData,
                currentGame:{
                    ...prevState.gameData.currentGame,
                    title: '',
                    maxScoring: '',
                    maxRounds: '',
                    isScoringAscending: true
                }
            },
            currentParty:[]
        }})
    }

    // onClick handler
    const handleOnClick = () => {

        if(gameLogic.isGameOver){
            setApp(prevState => {return{
                ...prevState, app:{
                    ...prevState.app,
                    isGameAlive: false
                },
                gameData:{
                    ...prevState.gameData,
                    currentGame:{
                        ...prevState.gameData.currentGame,
                        title: '',
                        maxScoring: '',
                        maxRounds: '',
                        isScoringAscending: true
                    }
                },
                currentParty:[]
            }})
        }else if(gameLogic.isRoundOver){
        
            setCurrentPlayers(prevPlayer => {
                return prevPlayer.map(player => {
                    return {
                        ...player,
                        currentGame:{
                            ...player.currentGame,
                            //position: sortedPlayers.findIndex(element => element.id === player.id) + 1
                        }
                    }
                })
            })

            setGameLogic(prevLogic => {
                return{
                    ...prevLogic,
                    currentPlayersLeft: currentPlayers.length,
                    currentRound: prevLogic.currentRound + 1,
                    showRoundToaster: false,
                    isRoundOver: false
                }
            })
        }
    }

    // iterate through and display all current players in game
    const playerElement = setupPlayerElementForRender(currentPlayers, setCurrentPlayers, handleNewScore);


    return(
        <StyledGameView>
            <div className="gameview-container-header">
                <div className="gameview-header-title-container">
                    <p>{gameLogic.currentRound}</p>
                    <div className="gameview-header-title">
                        <h4>{app.gameData.currentGame.title}</h4>
                    </div>
                </div>
                <button onClick={handleOnExit}>End</button>
            </div>
            <div className="gameview-body">
                {playerElement}
            </div>
            {gameLogic.showRoundToaster ?   
                <Toaster 
                    players={podiumPlayers}
                    onclick={handleOnClick}
                    gameOver={gameLogic.isGameOver}
                /> 
                :
                <></>}
        </StyledGameView>
    )
}