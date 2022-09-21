import React,{useEffect} from 'react';
import { useAppStateContext, useAppStateUpdateContext } from '../contexts/AppStateProvider';
import Footer from './Footer';
import GameView from './GameView';
import Header from './Header';
import MainView from './MainView';
import '../style.css';
import { headerContent } from '../utilities/headerContent';
import AddPlayerProvider from '../contexts/AddPlayerProvider';


export default function AppView(){
    const app = useAppStateContext();

    return(
        <main>
            {app && app.app.isGameAlive ?
                // game view 
                <GameView />
            :    
                // main menu view
                <AddPlayerProvider>
                    <Header content={headerContent} />
                    <MainView />
                    <Footer />
                </AddPlayerProvider> 
            }
        </main>
    )
}