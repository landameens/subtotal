import {GET_LAUNCHES_FAILURE, GET_LAUNCHES_STARTED, GET_LAUNCHES_SUCCESS} from './actionTypes'

export const initialState = {
    loading: false,
    launches: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAUNCHES_STARTED:
            return {
                ...state,
                loading: true
            }
        case GET_LAUNCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                launches: [...state.launches, action.payload]
            }
        case GET_LAUNCHES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}