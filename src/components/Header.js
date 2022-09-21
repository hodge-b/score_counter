import React from 'react';
import {StyledHeader} from '../components/styled/Header.styled';

export default function Header({content}){

    return(
        <StyledHeader>
            <h4>{content.title}</h4>
        </StyledHeader>
    )
}