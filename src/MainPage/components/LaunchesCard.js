import React, {useEffect, useState} from 'react'
import httpCaller from "@utils/httpCaller";
import dateFormat from "dateformat";

export const LaunchesCard = ({launch}) => {
    const [imgSrc, setImgSrc] = useState(null)

    useEffect(async () => {
        const response = await httpCaller('GET', `https://api.spacexdata.com/v4/rockets/${launch.rocket}`)
        setImgSrc(response.flickr_images[0])
    }, []);


    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator responsive-img" src={imgSrc} alt="Изображение ракеты"/>
            </div>
            <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        {launch.name}
                    </span>
                <span>
                    {dateFormat(launch.date_utc, "mmmm dS, yyyy")}
                </span>
            </div>
            <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        {launch.name}
                    </span>
                <p>{launch.details}</p>
            </div>
        </div>
    )
}