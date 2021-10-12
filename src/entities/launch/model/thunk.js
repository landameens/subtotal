import axios from 'axios'
import {getLaunchesFailure, getLaunchesStarted, getLaunchesSuccess} from './actions'

export const getLaunches = () => {
    return dispatch => {
        dispatch(getLaunchesStarted())

        axios
            .post(`https://api.spacexdata.com/v4/launches/query`, {
                "query": {
                    "success": true,
                    "date_utc": {
                        "$gte": "2015-01-01T00:00:00.000Z",
                        "$lte": "2019-12-31T00:00:00.000Z"
                    }
                },
                "options": {
                    "sort": {
                        "date_utc": "desc"
                    },
                    "limit": 100
                }
            })
            .then(res => {
                console.log("success")
                dispatch(getLaunchesSuccess(res.data))
            })
            .catch(err => {
                console.log('error')
                dispatch(getLaunchesFailure(err.message))
            })
    }
}