import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {launchModel} from '@entities/launch'

export const SortingButton = () => {
    const launches = useSelector(launchModel.selectors.launches)
    const dispatch = useDispatch()

    const handleClick = (event) => {
        event.preventDefault()
        dispatch(launchModel.selectors.launchesSortedByDate())

    }
    return <a className="waves-effect waves-light btn-small" id="btn" onClick={handleClick}>
        Sorting
    </a>
}
