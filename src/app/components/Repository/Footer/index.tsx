import React from 'react'
import { StyledFooter } from './StyledFooter'
import Language from './Language'
import Stars from './Stars'

export interface Props {
    html_url: string
    stargazers_count: number
    forks_count: number
    language: string
}

const Footer: React.FC<Props> = props => {
    return (
        <StyledFooter className='flex flex-row items-center justify-start mt-3'>
            <Language language={props.language} />
            <Stars
                stargazers_count={props.stargazers_count}
                html_url={props.html_url}
            />
        </StyledFooter>
    )
}

export default Footer
