import React, {useState} from 'react';
import { useAppStateContext, useAppStateUpdateContext } from '../../contexts/AppStateProvider';
import { StyledPartySelection } from './styled/PartySelection.styled';

export default function PartySelection(){

    const app = useAppStateContext();
    const setApp = useAppStateUpdateContext();
    const [players, setPlayers] = useState(app && app.players);


    const handlePlayerClick = e => {
        const buttonID = e.target.id;

        const selectedPlayer = players.filter(item => item.id === buttonID);
        const player = {...selectedPlayer[0]};
        
        if(app.currentParty.length < app.gameData.maxAmountOfPlayers){
            setApp(prevState => ({
                ...prevState,
                currentParty: [...prevState.currentParty, player]
            }))
            
            const newPlayers = players.filter(item => item.id !== player.id);
            setPlayers(newPlayers);
        }
        
    }

    // iterate and create block for each player in list
    const playerElement = players.map(item => (
        <div key={item.id} id={item.id} onClick={handlePlayerClick} className={`player-container`}>
            <div className="player-info" id={item.id}>
                <p className='player-name' id={item.id}>{item.name}</p>
                <p id={item.id}>{`${item.stats.wins} wins`}</p>
            </div>
            <p className='player-percentage' id={item.id}>{`Win Percentage ${item.stats.winPercentage}%`}</p>
        </div>
    ))

    return(
        <StyledPartySelection>
            {players.length > 0 ? playerElement : <p className="player-no-added-players">no players to add</p>}
        </StyledPartySelection>
    )
}