import { ADD_REPOSITORIES, CLEAR_REPOSITORIES } from 'app/constants/actionTypes'
import { Props as RepositoryType } from 'app/components/Repository'
import { Explore as ExploreType, initialExplore } from 'app/contexts/explore'

export interface Action {
    type: string
    repositories: RepositoryType[]
}

export const exploreReducer = (
    state: ExploreType = initialExplore,
    action: Action,
) => {
    switch (action.type) {
        case ADD_REPOSITORIES:
            return {
                ...state,
                repositories: action.repositories,
            }
        case CLEAR_REPOSITORIES:
            return {
                ...state,
                repositories: null,
            }
        default:
            return state
    }
}
