import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Header from './Header'
import Main from './Main'
import api from 'app/api'
import { ExploreContext } from 'app/contexts/explore'
import { FiltersContext } from 'app/contexts/filters'
import { ADD_REPOSITORIES } from 'app/constants/actionTypes'

const Explore: React.FC = () => {
    const { dispatch } = React.useContext(ExploreContext)
    const { state: filters } = React.useContext(FiltersContext)

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
