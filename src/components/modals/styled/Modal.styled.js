import styled from 'styled-components';

export const StyledModal = styled.div`
    position: absolute;
    top: -190%;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    height: 90vh;

    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    z-index: 1;

    .modal-header-container{
        position: relative;
        
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 10%;

        border-bottom: 1px solid black;
    }
    .modal-header-title-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-header-title-container > h4{
        font-size: 1.5rem;
        margin-right: .5rem;
    }
    .modal-header-container > button{
        position: absolute;
        top: 0%;
        left: 85%;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: .5rem;
        width: 2rem;

        font-size: 1.2rem;
        background-color: transparent;
    }
    .modal-body-container{
        height:77%;
        overflow: auto;
    }
    .modal-footer-container{
        display: flex;
        justify-content: center;

        padding: .5rem 0;
        background-color: #EFEFEF;
    }
    .modal-footer-container > button {
        background-color: #DDD;
    }
`