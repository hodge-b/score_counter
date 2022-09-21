import React from 'react';
import NewGame from './NewGame';
import PlayerList from './PlayerList';
import AppInfo from './AppInfo';
import { StyledModal } from './styled/Modal.styled';
import AddPlayer from './AddPlayer';
import PartySelection from './PartySelection';
import { useAppStateContext } from '../../contexts/AppStateProvider';


export default function Modal({modal, onclick, onExit}){

    const app = useAppStateContext();
    const gameData = app && app.gameData;

    return(
        <StyledModal>
            <div className="modal-header-container">
                <div className="modal-header-title-container">
                    <h4>{modal.title}</h4>
                    {modal.id === 6 ? <p>{`(${app && app.currentParty.length}/${gameData.maxAmountOfPlayers})`}</p> : <></>}
                </div>
                <button onClick={onExit}><i className='ri-close-circle-line'></i></button>
            </div>
            <div className="modal-body-container">
                {
                    // modal body content
                    // show new game modal
                    modal.id === 1 ?
                        <NewGame />
                    :
                    // show game list modal
                    modal.id === 2 ?
                        <></> 
                    :
                    // show player list modal
                    modal.id === 3 ?
                        <PlayerList onclick={onclick} />
                    :
                    // show app info modal
                    modal.id === 4 ?
                        <AppInfo />
                    :
                    modal.id === 5 ?
                    // show add player modal
                        <AddPlayer />
                    :
                    modal.id === 6 ?
                    // show party selection modal
                        <PartySelection />
                    :
                        <></>
                }
            </div>
            {modal.button ?
                <div className="modal-footer-container">
                    <button className={modal.buttonClassName} onClick={onclick}>{modal.buttonTitle}</button>
                </div>
                :
                <></>
            }
            
        </StyledModal>
    )
}