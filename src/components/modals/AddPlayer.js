import React from 'react';
import { useAddPlayerContext, useAddPlayerUpdateContext } from '../../contexts/AddPlayerProvider';
import { StyledAddPlayer } from './styled/AddPlayer.styled';

export default function AddPlayer(onclick){

    const name = useAddPlayerContext();
    const setName = useAddPlayerUpdateContext();

    return(
        <StyledAddPlayer>
            <div className='form-group'>
                <label>Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
            </div>
        </StyledAddPlayer>
    )
}