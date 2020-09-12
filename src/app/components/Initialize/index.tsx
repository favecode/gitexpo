import React from 'react'
import * as ls from 'local-storage'
import { FiltersType } from 'app/pages/Explore/Main/Filters'

const Initialize: React.FC = props => {
    let filters: FiltersType = ls.get<FiltersType>('filters')
    if (!filters) {
        filters = {
            languages: [],
            spokenLanguages: [],
            since: 'daily',
        }

        ls.set<FiltersType>('filters', filters)
    }
    return <></>
}

export default Initialize
