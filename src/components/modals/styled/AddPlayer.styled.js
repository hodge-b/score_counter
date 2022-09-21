import styled from 'styled-components';

export const StyledAddPlayer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 1rem;

    .form-group{
        position: relative;

        padding: .7rem;
        margin-top: 2rem;

        border: 1px solid;
        border-radius: 5px;
    }
    .form-group > label {
        position: absolute;
        top: -10px;
        left: 10px;
        width: 25%;

        text-align: center;
        background-color: white;
    }
    .form-group > input {
        font-size: 1.5rem;
        width: 100%;
        border: none;
    }
    .form-group > input:focus{
        outline: none;
    }
`