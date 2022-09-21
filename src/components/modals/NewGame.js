import React, {useState} from 'react';
import { useAppStateContext, useAppStateUpdateContext } from '../../contexts/AppStateProvider';
import { StyledNewGame } from './styled/NewGame.styled';

export default function NewGame(){

    const app = useAppStateContext();
    const setApp = useAppStateUpdateContext();

    
    return(
        <StyledNewGame>
            <div className="form-group form-group--title">
                <label>Game Title</label>
                <input 
                    type="text" 
                    className="form-control input-lag"
                    value={app.gameData.currentGame.title}
                    onChange={e => setApp(prevApp => {
                        return {
                            ...prevApp,
                            gameData:{
                                ...prevApp.gameData,
                                currentGame:{
                                    ...prevApp.gameData.currentGame,
                                    title: e.target.value
                                }
                            }
                        }
                    })}
                />
            </div>
            <div className="form-group form-group--max-scoring">
                <label>Max Scoring</label>
                <input 
                    type="text" 
                    className="form-control input-lag" 
                    placeholder='(optional)'
                    value={app.gameData.currentGame.maxScoring}
                    onChange={e => setApp(prevApp => {
                        return{
                            ...prevApp,
                            gameData:{
                                ...prevApp.gameData,
                                currentGame:{
                                    ...prevApp.gameData.currentGame,
                                    maxScoring: e.target.value
                                }
                            }
                        }
                    })}
                    
                />
            </div>
            <div className="form-group form-group--max-round">
                <label>Max Rounds</label>
                <input 
                    type="text" 
                    className="form-control input-lag" 
                    placeholder='(optional)'
                    value={app.gameData.currentGame.maxRounds}
                    onChange={e => setApp(prevApp => {
                        return{
                            ...prevApp,
                            gameData:{
                                ...prevApp.gameData,
                                currentGame:{
                                    ...prevApp.gameData.currentGame,
                                    maxRounds: e.target.value
                                }
                            }
                        }
                    })}
                />
            </div>
            <div className="form-group--max-options">
                <label>Reversed Scoring</label>
                <input 
                    type="checkbox"
                    onChange={e => setApp(prevApp => {
                        return{
                            ...prevApp,
                            gameData:{
                                ...prevApp.gameData,
                                currentGame:{
                                    ...prevApp.gameData.currentGame,
                                    isScoringAscending: !e.target.checked
                                }
                            }
                        }
                    })}
                />
            </div>
        </StyledNewGame>
    )
}