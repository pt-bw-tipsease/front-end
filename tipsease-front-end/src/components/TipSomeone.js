import React, { useEffect, useState} from 'react';
import axios from 'axios';

import ServiceWorkerCard from './ServiceWorkerCard';

export default function TipSomeone(){
    const [serviceWorker, setServiceWorker] = useState([])

    useEffect(() => {
        axios.get(`https://vr-overlord-server.herokuapp.com/serviceWorkers`)
            .then(res => {
                console.log(res.data)
                setServiceWorker(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return(
        <div>
            <h1>Find a service worker to tip!</h1>
            <h2>{serviceWorker.map(props => {
                return <ServiceWorkerCard
                    photoUrl={props.photoUrl}
                    fullName={props.fullName}
                    key = {props.id}
                    serviceType ={props.serviceType}
                    workplace ={props.workplace}
                    tagline ={props.tagline}
                    bio={props.bio}
                    numOfRatings={props.numOfRatings}
                    rating={props.rating}
                />
            })}</h2>
        </div>
    )
}