import React, {useContext, useState} from 'react';
import {nanoid} from 'nanoid';

const PlayerStateContext = React.createContext();
const PlayerStateUpdateContext = React.createContext();

export const usePlayerState = () => useContext(PlayerStateContext);
export const usePlayerUpdateState = () => useContext(PlayerStateUpdateContext);


export default function PlayerStateProvider({children}){

    const [players, setPlayers] = useState([]);

    return(
        <PlayerStateContext.Provider value={players}>
            <PlayerStateUpdateContext.Provider value={setPlayers}>
                {children}
            </PlayerStateUpdateContext.Provider>
        </PlayerStateContext.Provider>
    )
}