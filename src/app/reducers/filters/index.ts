import { ADD_FILTERS } from 'app/constants/actionTypes'
import { FiltersType } from 'app/pages/Explore/Main/Filters'
import { initialFilters } from 'app/contexts/filters'

export interface Action {
    type: string
    filters: FiltersType
}

export const filtersReducer = (
    state: FiltersType = initialFilters,
    action: Action,
) => {
    switch (action.type) {
        case ADD_FILTERS:
            return {
                ...state,
                ...action.filters,
            }
        default:
            return state
    }
}
