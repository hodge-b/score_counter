import styled from 'styled-components';

export const StyledNewGame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    margin: .5rem 0;

    .form-group{
        position: relative;
        display: flex;
        justify-content: center;

        padding: .7rem;
        margin-bottom: 1rem;

        border: 1px solid;
        border-radius: 5px;
    }
    .form-group--title > label{
        position: absolute;
        top: -10px;
        left: 10px;
        width: 35%;

        text-align: center;
        background-color: white;
    }
    .form-group--title > input{
        width: 100%;
        font-size: 1.5rem;
        border: none;
    }
    .form-group--title > input:focus{
        outline: none;
    }
    .form-group--max-scoring > label{
        position: absolute;
        top: -10px;
        left: 10px;
        width: 40%;

        text-align: center;
        background-color: white;
    }
    .form-group--max-scoring > input{
        width: 100%;
        font-size: 1.5rem;
        border: none;
    }
    .form-group--max-scoring > input:focus{
        outline: none;
    }
    .form-group--max-round > label{
        position: absolute;
        top: -10px;
        left: 10px;
        width: 40%;

        text-align: center;
        background-color: white;
    }
    .form-group--max-round > input{
        width: 100%;
        font-size: 1.5rem;
        border: none;
    }
    .form-group--max-round > input:focus{
        outline: none;
    }
    .form-group--max-options{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
    }
`