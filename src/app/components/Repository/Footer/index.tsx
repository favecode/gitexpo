import React from 'react'
import { StyledFooter } from './StyledFooter'
import Language from './Language'
import Stars from './Stars'
import Forks from './Forks'

export interface Props {
    name: string
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
            <Forks
                name={props.name}
                forks_count={props.stargazers_count}
                html_url={props.html_url}
            />
        </StyledFooter>
    )
}

export default Footer
