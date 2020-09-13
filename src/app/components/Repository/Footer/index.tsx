import React from 'react'
import { StyledFooter } from './StyledFooter'
import Language from './Language'
import Stars from './Stars'
import Forks from './Forks'
import Contributors, { ContributorType } from './Contributors'
import CurrentPeriodStars from './CurrentPeriodStars'

export interface Props {
    name: string
    url: string
    stars: number
    currentPeriodStars: number
    forks: number
    language: string
    languageColor: string
    contributors: ContributorType[]
}

const Footer: React.FC<Props> = props => {
    return (
        <StyledFooter className='flex flex-row items-center justify-start mt-3 flex-wrap'>
            {props.language && (
                <Language
                    language={props.language}
                    languageColor={props.languageColor}
                />
            )}
            <Stars stars={props.stars} url={props.url} />
            <Forks name={props.name} forks={props.forks} url={props.url} />
            {props.contributors.length > 0 && (
                <Contributors contributors={props.contributors} />
            )}
            <CurrentPeriodStars currentPeriodStars={props.currentPeriodStars} />
        </StyledFooter>
    )
}

export default Footer
