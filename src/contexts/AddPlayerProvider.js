import React, {useContext, useState} from 'react';

const AddPlayerContext = React.createContext();
const AddPlayerUpdateContext = React.createContext();

export const useAddPlayerContext = () => useContext(AddPlayerContext);
export const useAddPlayerUpdateContext = () => useContext(AddPlayerUpdateContext);


export default function AddPlayerProvider({children}){
    const [addPlayerName, setAddPlayerName] = useState('');

    return(
        <AddPlayerContext.Provider value={addPlayerName}>
            <AddPlayerUpdateContext.Provider value={setAddPlayerName}>
                {children}
            </AddPlayerUpdateContext.Provider>
        </AddPlayerContext.Provider>
    )
}