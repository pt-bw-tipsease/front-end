import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { Form } from 'semantic-ui-react';

export default function Login(props){
    console.log(props);
    const [login, setLogin] = useState({ email: "", password: ""});

    useEffect(() => {
        Axios.get(``)
            .then(res => {

            })
            .catch(error => {
                console.log(error)
            })
    })

    const changeHandler = event => {
        setLogin({ ...login, [event.target.username]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();

    }

    return (
        <div className="login">

        <Form className="loginform" onSubmit={submitForm}>
            <Form.Group className="logingroup">
 
            <Form.Input className="logingroup" 
                type="email"
                name="email"
                placeholder="Email"
                onChange={changeHandler}
            />

            <Form.Input className="logingroup"
                type="password"
                name="password"
                placeholder="Password"
                onChange={changeHandler}
            />

            <Form.Button type="submit">Login</Form.Button>
            </Form.Group>
        </Form>
        </div>
    )
}

