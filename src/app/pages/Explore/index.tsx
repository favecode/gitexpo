import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import * as ls from 'local-storage'
import Header from './Header'
import Main from './Main'
import { Props as RepositoryType } from 'app/components/Repository'
import { FiltersType } from 'app/pages/Explore/Main/Filters'
import api from 'app/api'
import { ExploreContext } from 'app/contexts/explore'
import { ADD_REPOSITORIES } from 'app/constants/actionTypes'

const Explore: React.FC = () => {
    const { dispatch } = React.useContext(ExploreContext)

    let filters: FiltersType = ls.get<FiltersType>('filters')
    const treding = useQuery(api.trending, {
        variables: {
            since: filters.since,
            languages: filters.languages,
            spokenLanguages: filters.spokenLanguages,
        },
    })

    React.useEffect(() => {
        if (treding.data) {
            dispatch({
                type: ADD_REPOSITORIES,
                repositories: treding.data.trending,
            })
        }
    }, [treding.data])

    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

export default Explore
