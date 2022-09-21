import React,{useState} from 'react';
import AppView from './components/AppView';
import AppStateProvider from './contexts/AppStateProvider';

export default function App(){
    return(
        <AppStateProvider>
            <AppView />
        </AppStateProvider>
    )
}