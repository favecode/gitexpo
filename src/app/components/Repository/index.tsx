import React from 'react'
import Header from './Header'
import Main from './Main'
export interface Props {
    name: string
    owner: {
        login: string
    }
    description: string
    stargazers_count: number
    forks_count: number
    language: string
}

const Repository: React.FC<Props> = props => {
    return (
        <article className='p-4'>
            <Header name={props.name} owner={props.owner} />
            <Main description={props.description} />
        </article>
    )
}

export default Repository
