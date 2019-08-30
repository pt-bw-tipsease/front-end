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
                    key = {props.id}
                />
            })}</h2>
        </div>
    )
}