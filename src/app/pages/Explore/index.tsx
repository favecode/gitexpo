import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import Header from './Header'
import Main from './Main'
import api from 'app/api'
import { ExploreContext } from 'app/contexts/explore'
import { FiltersContext } from 'app/contexts/filters'
import { ADD_REPOSITORIES } from 'app/constants/actionTypes'

// Explore Page
const Explore: React.FC = () => {
    const { dispatch } = React.useContext(ExploreContext)
    const { state } = React.useContext(FiltersContext)
    // fetch repositories
    const [treding, tredingResponse] = useLazyQuery(api.trending)

    React.useEffect(() => {
        if (state) {
            treding({
                variables: {
                    since: state.since,
                    languages: state.languages,
                    spokenLanguage: state.spokenLanguage,
                },
            })
        }
    }, [state])

    React.useEffect(() => {
        if (tredingResponse.data) {
            // Set repositories to context
            dispatch({
                type: ADD_REPOSITORIES,
                repositories: tredingResponse.data.trending,
            })
        }
    }, [tredingResponse.data])

    return (
        <div>
            <Header />
            <div className='px-3'>
                <Main />
            </div>
        </div>
    )
}

export default Explore
