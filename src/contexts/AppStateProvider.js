import React, {useContext, useState, useEffect} from 'react';
import { getAppDataFromStorage, setAppDataToStorage } from '../utilities/functions';
import {setupApp} from '../utilities/setupApp';

// create contexts
const AppStateContext = React.createContext();
const AppStateUpdateContext = React.createContext();

// export custom context hooks
export const useAppStateContext = () => useContext(AppStateContext);
export const useAppStateUpdateContext = () => useContext(AppStateUpdateContext);


export default function AppStateProvider({children}){

    const [app, setApp] = useState();

    useEffect(() => {
        setApp(setupApp());
        const players = getAppDataFromStorage();
        setApp(prevState => ({
            ...prevState, players:[...players]
        }))
    }, [])

    return(
        <AppStateContext.Provider value={app}>
            <AppStateUpdateContext.Provider value={setApp}>
                {children}
            </AppStateUpdateContext.Provider>
        </AppStateContext.Provider>
    )
}