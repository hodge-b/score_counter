import styled from 'styled-components';

export const StyledMainView = styled.section`
    position: relative;
    padding: 1rem 0;
    margin: 2rem 0;

    .menu-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .menu-container > * {
        margin: .5rem 0;
    }
    button{
        width: 50%;
        padding: .5rem;

        border-radius: 5px;
        border: none;

        font-size: .8rem;
        background-color: #DDD;
    }

`