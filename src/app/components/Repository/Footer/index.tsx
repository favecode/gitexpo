import React from 'react'
import { StyledFooter } from './StyledFooter'
import Language from './Language'

export interface Props {
    stargazers_count: number
    forks_count: number
    language: string
}

const Footer: React.FC<Props> = props => {
    return (
        <StyledFooter className='flex flex-row items-center justify-between mt-2'>
            <Language language={props.language} />
        </StyledFooter>
    )
}

export default Footer
