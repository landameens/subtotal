import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {launchModel} from '@entities/launch'
import {LaunchesCard} from './LaunchesCard'

export const Launches = () => {
    const launches = useSelector(launchModel.selectors.launches)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(launchModel.thunks.getLaunches())
    }, [])

    if (!launches.length) {
        return <p>Запусков нет</p>
    }

    return launches.map(launch => <LaunchesCard launch={launch} key={launch.id}/>)
}