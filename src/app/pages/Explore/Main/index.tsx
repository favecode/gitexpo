import React from 'react'
import Filters from './Filters'
import Items from './Items'
import { StyledMain } from './StyledMain'
import { Props as RepositoryType } from 'app/components/Repository'

interface Props {
    repositories: RepositoryType[]
}

const Main: React.FC<Props> = props => {
    return (
        <StyledMain className='max-w-4xl mx-auto rounded-lg my-10'>
            <Filters />
            <Items repositories={props.repositories} />
        </StyledMain>
    )
}

export default Main
