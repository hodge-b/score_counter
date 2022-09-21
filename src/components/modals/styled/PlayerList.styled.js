import styled from 'styled-components';

export const StyledPlayerList = styled.div`

    .player-container{
        padding: 0 .5rem;
        border-bottom: 1px solid black;
    }
    .player-info{
        display: flex;
        justify-content: space-between;
        font-size: 1.5rem;
    }
    .player-info > p{
        margin: .2rem 0;
    }
    .player-sub-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .player-percentage{
        margin: .2rem 0;
    }
    .btn--delete-player{
        margin-right: 1rem;
        font-size: 1rem;
    }
    .player-no-added-players{
        margin-top: 2rem;
        text-align: center;
    }
`