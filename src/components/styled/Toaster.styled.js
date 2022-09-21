import styled from 'styled-components';

export const StyledToaster = styled.div`
    position: absolute;
    top: 25%;
    left: 10%;
    width: 80%;

    text-align: center;
    background-color: white;
    border: 1px solid black;

    .toaster-header-container{
        padding: .5rem 0;
        border-bottom: 1px solid black;
    }
    .toaster-footer-container{
        padding: .5rem 0;
    }
    .toaster-footer-container > button{

        padding: .5rem;

        font-size: 1.3rem;
        border: none;
        border-radius: 5px;
        background-color: '#EEE';
    }
    .player-container{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: .5rem 1rem;
    }
    .player-container > h2{
        font-size: 2.5rem;
    }
    .player-container > p{
        margin-left: 1rem;
        font-size: 2rem;
    }
`