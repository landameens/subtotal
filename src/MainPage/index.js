import React from 'react'
import {Launches} from './components/Launches'
import {SortingButton} from "./components/SortingButton";

export const MainPage = () => {
    return <div className="container">
        <SortingButton/>
        <div className="row">
            <div className="col s6 m4">
                <Launches/>
            </div>
        </div>
    </div>
}