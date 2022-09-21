import React from 'react';
import { StyledAppInfo } from './styled/AppInfo.styled';

export default function AppInfo(){

    return(
        <StyledAppInfo>
            <p className="info--title">Score Counter</p>
            <p className="info--version">Version: 1.0</p>
            <p className="info--description">This app was designed and built by Brad Hodge using the React Framework.</p>
        </StyledAppInfo>
    )
}