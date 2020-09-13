import React from 'react'
import { exploreReducer } from 'app/reducers/explore'
import { Props as RepositoryType } from 'app/components/Repository'

export interface Explore {
    repositories: RepositoryType[] | null
}

export const initialExplore: Explore = {
    repositories: null,
}

interface IContextProps {
    state: Explore
    dispatch: React.Dispatch<any>
}

export const ExploreContext = React.createContext<IContextProps>({
    state: initialExplore,
    dispatch: () => null,
})

const ExploreProvider: React.FC = props => {
    const [state, dispatch] = React.useReducer(exploreReducer, initialExplore)

    const value: IContextProps = {
        state,
        dispatch,
    }

    return (
        <ExploreContext.Provider value={value}>
            {props.children}
        </ExploreContext.Provider>
    )
}

export default ExploreProvider
