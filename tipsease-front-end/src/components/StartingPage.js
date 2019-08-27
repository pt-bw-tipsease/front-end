import React from 'react';
import {NavLink} from 'react-router-dom';


import './StartingPage.css';


export default function StartingPage(){
    return (
        <>

        <h1>Are you ready to experience a brand new tipping revolution?</h1>
        <NavLink to="/login"><button className="ui button">Login</button></NavLink>

        </>
    )
}