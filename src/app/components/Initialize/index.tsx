import React from 'react'
import * as ls from 'local-storage'
import { FiltersType } from 'app/pages/Explore/Main/Filters'
import { FiltersContext } from 'app/contexts/filters'
import { EDIT_FILTERS } from 'app/constants/actionTypes'

// preparing data for components
const Initialize: React.FC = props => {
    const { dispatch } = React.useContext(FiltersContext)

    // Get data from local storage
    let filters: FiltersType = ls.get<FiltersType>('filters')

    if (!filters) {
        filters = {
            languages: [],
            spokenLanguage: [],
            since: 'daily',
        }

        ls.set<FiltersType>('filters', filters)
    }

    // store data from local storage to contexts
    React.useEffect(() => {
        dispatch({
            type: EDIT_FILTERS,
            data: {
                ...filters,
            },
        })
    }, [])

    return <></>
}

export default Initialize
