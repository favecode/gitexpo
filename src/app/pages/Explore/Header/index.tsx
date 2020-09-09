import React from 'react'
import texts from 'app/constants/texts'
import { StyledHeader, StyledTitle, StyledDescription } from './StyledHeader'

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <StyledTitle>{texts.explore.headerTitle}</StyledTitle>
            <StyledDescription>
                {texts.explore.headerDescription}
            </StyledDescription>
        </StyledHeader>
    )
}

export default Header
