import React from 'react'

export const LaunchesCard = ({launch}) => {
    return (
        <>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    //ToDo:Картинка
                    {/*<img className="activator" src="">*/}
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{launch.name}<i
                        className="material-icons right">more_vert</i></span>
                    <span>{launch.date}</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{launch.name}<i
                        className="material-icons right">close</i></span>
                    <p>{launch.info}</p>
                </div>
            </div>

        </>
    )
}