import React from 'react'
import {useSelector} from 'react-redux'
import {launchModel} from '@entities/launch'
import {LaunchesCard} from './LaunchesCard'

export const Launches = ({asc}) => {
    const launches = useSelector(launchModel.selectors.launches)

    if (!launches.length) {
        return <p>Запусков нет</p>
    }

    if (!asc) {
        return launches.map(launch => <div className='col s4' key={launch.id}>
            <LaunchesCard
                launch={launch}
                key={launch.id}/>
        </div>)
    } else {
        return [].concat(launches).reverse().map(launch => <div className='col s4' key={launch.name}><LaunchesCard
            launch={launch}
            key={launch.name}/></div>)
    }
}