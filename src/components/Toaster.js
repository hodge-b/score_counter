import React from 'react';
import { useAppStateContext } from '../contexts/AppStateProvider';
import { StyledToaster } from './styled/Toaster.styled';

export default function Toaster({players, onclick, gameOver}){
    
    const playerElement = players.map(player => (
        <div key={player.id} className={`player-container`}>
            <h2>{player.currentGame.position}</h2>
            <p>{player.name}</p>
            <p>{player.currentGame.totalScore}</p>
        </div>
    ))

    return(
        <StyledToaster>
            <div className="toaster-header-container">
                {gameOver ? <h4>End of Game Results</h4> : <h4>Podium Positions</h4>}
            </div>
            {playerElement}
            <div className="toaster-footer-container">
                <button onClick={onclick}>{gameOver ? 'End Game' : 'End Turn'}</button>
            </div>
        </StyledToaster>
    )
}