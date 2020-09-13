import { EDIT_FILTERS } from 'app/constants/actionTypes'
import { FiltersType } from 'app/pages/Explore/Main/Filters'
import { initialFilters } from 'app/contexts/filters'
import * as ls from 'local-storage'

export interface Action {
    type: string
    data: {
        languages?: string[]
        spokenLanguage?: string[]
        since?: string
    }
}

export const filtersReducer = (
    state: FiltersType = initialFilters,
    action: Action,
) => {
    let filters: FiltersType
    switch (action.type) {
        case EDIT_FILTERS:
            filters = {
                ...state,
                ...action.data,
            }

            ls.set<FiltersType>('filters', filters)
            return filters
        default:
            return state
    }
}
