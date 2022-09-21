import styled from 'styled-components';

export const StyledGameView = styled.section`
    
    form{
        width: 25%;
    }

    form > input{
        width: 100%;
        height: 100%;
        font-size: 2rem;
        text-align: center;
    }

    .gameview-container-header{
        border-bottom: 1px solid black;
    }

    .gameview-header-title-container{

        padding: .5rem 0;
        width: 100%;

        text-align: center;
    }

    .gameview-container-header > button{
        position: absolute;
        top: 0.5%;
        left: 82%;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: .5rem;


        font-size: 1.3rem;
        border: none;
        border-radius: 5px;
        background-color: '#EEE';
    }

    .gameview-header-title > h4{
        font-size: 1.5rem;
    }

    .gameview-header-title-container > p{
        position: absolute;
        margin: 0 .5rem;
        width: 10%;

        font-size: 1.5rem;
        border: 1px solid black;
    }

    .gameview-container-player{
        display: flex;
        justify-content: space-between;

        padding: .5rem;
        border-bottom: 1px solid black;
    }

    .gameview-container-player-info{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .gameview-container-player-info > h2{
        font-size: 2.5rem;
        margin-right: 1rem;
    }
    
    .gameview-container-player-wrapper > p:first-child{
        font-size: 2rem;
    }
    
`