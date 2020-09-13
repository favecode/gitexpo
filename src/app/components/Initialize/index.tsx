import React from 'react'
import * as ls from 'local-storage'
import { FiltersType } from 'app/pages/Explore/Main/Filters'
import { FiltersContext } from 'app/contexts/filters'
import { EDIT_FILTERS } from 'app/constants/actionTypes'

const Initialize: React.FC = props => {
    const { dispatch } = React.useContext(FiltersContext)

    let filters: FiltersType = ls.get<FiltersType>('filters')
    if (!filters) {
        filters = {
            languages: [],
            spokenLanguages: [],
            since: 'daily',
        }

        ls.set<FiltersType>('filters', filters)
    }

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
