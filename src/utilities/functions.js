import {nanoid} from 'nanoid';
import { appInfoModal } from './modalContent';

// ---- Local Storage ---- //
export const getAppDataFromStorage = () => {
    return JSON.parse(localStorage.getItem('players') || "[]");
}
export const setAppDataToStorage = players => {
    localStorage.setItem("players", JSON.stringify(players));
}

// ---- Game ---- //


// ---- PLAYERS ---- //

// delete player
export const deletePlayer = (app, playerID) => {
    return app.players.filter(player => player.id !== playerID);
}

// create new player
export const createNewPlayer = (setState, playerName) => {
    let copyArray = [];
    
    playerName = processName(playerName);

    const newPlayer = {
        id: nanoid(),
        name: playerName,
        stats:{
            wins: 0,
            loses: 0,
            winPercentage: 0,
            totalGamesPlayed: 0
        },
        currentGame:{
            score: '',
            totalScore: 0,
            position: 0,
            isTurnOver: false,
        }
    }

    setState(prevState => {
        copyArray = prevState.players;
        return prevState;
    })

    copyArray.push(newPlayer);
    return copyArray;
}

// process player name so it is properly formatted
export const processName = name => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// iterate through and display all current players in game
export const setupPlayerElementForRender = (players, setPlayers, handleNewScore) => {
    
    return players.map(item => (
        <div 
            key={item.id} 
            className="gameview-container-player"
            style={item.currentGame.isTurnOver ? {backgroundColor: "#EEE"} : {backgroundColor: "#FFF"}}
        >
            <div className="gameview-container-player-info">
                <h2>{item.currentGame.position}</h2>
                <div className="gameview-container-player-wrapper">
                    <p>{item.name}</p>
                    <p>{item.currentGame.totalScore}</p>
                </div>
            </div>
            {
                item.currentGame.isTurnOver ? 
                    <></> 
                :
                <form id={item.id} onSubmit={handleNewScore}>
                    <input 
                        id={item.id} 
                        value={item.currentGame.score}
                        type= "text"
                        onChange={e => setPlayers(prevPlayers => {
                            return prevPlayers.map(player => {
                                if(player.id === item.id){
                                    return{
                                        ...player,
                                        currentGame:{
                                            ...player.currentGame,
                                            score: e.target.value
                                        }
                                    }
                                }
                                return player;
                            });
                        })}
                    />
                </form>
            }
        </div>
    ))
}

// iterate through player list to see if someone reached the max allowed score
export const isMaxScoringReached = (maxScore, players) => {
    const reached = players.filter(player => player.currentGame.totalScore >= maxScore);
    return reached.length > 0 ? true : false
}