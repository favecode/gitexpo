import { ADD_REPOS } from '../constants/actionTypes'

interface Action {
    type: string
    repos: any
}

export default (state = [], action: Action) => {
    switch (action.type) {
        case ADD_REPOS:
            return [...state, ...action.repos]
        default:
            return state
    }
}
