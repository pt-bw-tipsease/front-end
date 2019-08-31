import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

export default function ServiceWorkerCard({fullName, photoUrl, serviceType, workplace, tagline, bio, numOfRatings, rating}) {
    return(
        <Card>
        <Image src={photoUrl} atl={fullName}/>
        <Card.Content>
            <Card.Header>
                {fullName}
            </Card.Header>
            <Card.Meta>
                {serviceType}
            </Card.Meta>
            <Card.Meta>
                Company: {workplace}
            </Card.Meta>
            <Card.Content>
                $Cashline: {tagline}
            </Card.Content>
            <Card.Content>
                bio: {bio}
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="group"/>
                    Number of Rating: {numOfRatings}
                </a>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="thumbs up outline"/>
                    Rating: {rating}
                </a>

            </Card.Content>
        </Card.Content>
        </Card>
    )
}