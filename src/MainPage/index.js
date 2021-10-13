import React, {useEffect, useState} from 'react'
import {Launches} from './components/Launches'
import {useDispatch} from "react-redux";
import {launchModel} from "@entities/launch";

export const MainPage = () => {
    const [ascSorting, setAscSorting] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(launchModel.thunks.getLaunches())
    }, [])

    const handleClick = () => {
        setAscSorting(!ascSorting)
    }

    return <>
        <div className="row">
            <a className="waves-effect waves-light btn-large blue-grey darken-1 col offset-s11 card"
               onClick={handleClick}>
                Sorting
            </a>
        </div>
        <div className="row">
            <Launches asc={ascSorting}/>
        </div>
    </>
}