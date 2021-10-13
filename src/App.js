import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './entities/configureStoe'
import {launchModel} from './entities/launch'
import {MainPage} from './MainPage/index'

export const App = () => {
    const initialState = {
        launches: launchModel.initialState
    }
    const store = configureStore(initialState)

    return (
        <Provider store={store}>
            <MainPage/>
        </Provider>
    )
}