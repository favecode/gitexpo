import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export interface Props {
    name: string
    owner: {
        login: string
    }
    html_url: string
    description: string
    stargazers_count: number
    forks_count: number
    language: string
}

const Repository: React.FC<Props> = props => {
    return (
        <article className='p-4'>
            <Header
                name={props.name}
                owner={props.owner}
                html_url={props.html_url}
            />
            <Main description={props.description} />
            <Footer
                stargazers_count={props.stargazers_count}
                forks_count={props.forks_count}
                language={props.language}
            />
        </article>
    )
}

export default Repository
