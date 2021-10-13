import {GET_LAUNCHES_FAILURE, GET_LAUNCHES_STARTED, GET_LAUNCHES_SUCCESS} from './actionTypes'


export const getLaunchesSuccess = (launches) => {
    return {
        type: GET_LAUNCHES_SUCCESS,
        payload: {
            launches
        }
    }
}

export const getLaunchesStarted = () => {
    return {
        type: GET_LAUNCHES_STARTED
    }
}

export const getLaunchesFailure = error => {
    return {
        type: GET_LAUNCHES_FAILURE,
        payload: {
            error
        }
    }
}