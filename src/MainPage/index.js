import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {launchModel} from "@entities/launch";

export const MainPage = () => {
    const launches = useSelector(launchModel.selectors.launches)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(launchModel.thunks.getLaunches())
    }, []);

    console.log(launches)
    return <p>Запуски</p>
}