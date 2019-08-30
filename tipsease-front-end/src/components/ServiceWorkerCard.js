import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default function ServiceWorkerCard({fullName, photoUrl}) {
    return(
        <Card>
        <Image src={photoUrl} atl={fullName}/>
        </Card>
    )
}