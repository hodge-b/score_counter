import React from 'react';
import { useAppStateContext } from '../../contexts/AppStateProvider';
import { StyledPlayerList } from './styled/PlayerList.styled';


export default function PlayerList({onclick}){

    const app = useAppStateContext();
    const players = app.players;

    // iterate and create block for each player in list
    const playerElement = players.map(item => (
        <div key={item.id} className='player-container'>
            <div className="player-info">
                <p className='player-name'>{item.name}</p>
                <p>{`${item.stats.wins} wins`}</p>
            </div>
            <div className="player-sub-info">
                <p className='player-percentage'>{`Win Percentage ${item.stats.winPercentage}%`}</p>
                <i id={item.id} className='btn--delete-player ri-delete-bin-line' onClick={onclick}></i>
            </div>
        </div>
    ))

    return(
        <StyledPlayerList>
            {players.length > 0 ? playerElement : <p className="player-no-added-players">no added players</p>}
        </StyledPlayerList>
    )

}