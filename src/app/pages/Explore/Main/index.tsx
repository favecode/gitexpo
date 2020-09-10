import React from 'react'
import Filters from './Filters'
import Items from './Items'
import { StyledMain } from './StyledMain'

const Main: React.FC = () => {
    return (
        <StyledMain className='max-w-4xl mx-auto rounded-lg mt-10'>
            <Filters />
            <Items />
        </StyledMain>
    )
}

export default Main
