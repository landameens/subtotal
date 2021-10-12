import {applyMiddleware, combineReducers, createStore} from 'redux'
import {launchModel} from "./launch";
import thunk from "redux-thunk";
import logger  from "redux-logger";



const configureStore = (initialState) => {
    const rootReducer = combineReducers({
        launches: launchModel.reducer,
    })

    const middlewares = [thunk, logger]
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}

export default configureStore