import React from 'react'
import texts from 'app/constants/texts'
import { StyledHeader, StyledTitle, StyledDescription } from './StyledHeader'

// Header of explore page
const Header: React.FC = () => {
    return (
        <StyledHeader className='flex flex-col justify-center items-center p-10'>
            <StyledTitle>{texts.explore.headerTitle}</StyledTitle>
            <StyledDescription>
                {texts.explore.headerDescription}
            </StyledDescription>
        </StyledHeader>
    )
}

export default Header
