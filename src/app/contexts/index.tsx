import React from 'react'
import ExploreProvider from 'app/contexts/explore'
import FiltersProvider from 'app/contexts/filters'

const ContextProvider: React.FC = props => {
    return (
        <ExploreProvider>
            <FiltersProvider>{props.children}</FiltersProvider>
        </ExploreProvider>
    )
}

export default ContextProvider
