import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { ContributorType } from './Footer/Contributors'
import { StyledRepository } from './StyledRepository'

export interface Props {
    name: string
    author: string
    url: string
    description: string
    stars: number
    currentPeriodStars: number
    forks: number
    language: string
    languageColor: string
    contributors: ContributorType[]
}

// Respository item of explorer page
const Repository: React.FC<Props> = props => {
    return (
        <StyledRepository className='p-4'>
            <Header name={props.name} author={props.author} url={props.url} />
            <Main description={props.description} />
            <Footer
                name={props.name}
                url={props.url}
                stars={props.stars}
                currentPeriodStars={props.currentPeriodStars}
                forks={props.forks}
                language={props.language}
                languageColor={props.languageColor}
                contributors={props.contributors}
            />
        </StyledRepository>
    )
}

export default Repository
