import React from 'react'
import { filtersReducer } from 'app/reducers/filters'
import { FiltersType } from 'app/pages/Explore/Main/Filters'

export const initialFilters: FiltersType = {
    languages: [],
    spokenLanguage: [],
    since: 'daily',
}

interface IContextProps {
    state: FiltersType
    dispatch: React.Dispatch<any>
}

export const FiltersContext = React.createContext<IContextProps>({
    state: initialFilters,
    dispatch: () => null,
})

const FiltersProvider: React.FC = props => {
    const [state, dispatch] = React.useReducer(filtersReducer, initialFilters)

    const value: IContextProps = {
        state,
        dispatch,
    }

    return (
        <FiltersContext.Provider value={value}>
            {props.children}
        </FiltersContext.Provider>
    )
}

export default FiltersProvider
