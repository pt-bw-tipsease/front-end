import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from "axios";

export default class SignUpForm extends React.Component{
    state= {
        fullName: "",
        photoUrl: "",
        serviceType: "",
        workplace: "",
        timeAtJob: "",
        tagline: "",
        bio: "",
        username: "",
        password: "",
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        const newUser ={
            username: this.state.username,
            password: this.state.password,
            fullName: this.state.fullName,
            serviceType: this.state.serviceType,
            workplace: this.state.workplace,
            timeAtJob: this.state.timeAtJob,
            tagline: this.state.tagline,
            bio: this.state.bio,

        };

        console.log(newUser);
        axios.post(`https://vr-overlord-server.herokuapp.com/serviceWorkers`, newUser)
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log("account created!")
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){

    return(
        <div>
            <form onSubmit={this.handleSubmit}>

            <label htmlFor="fullName">Full Name</label>
            <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={this.changeHandler}
            />

            <label htmlFor="serviceType">Service Type</label>
            <input
                type="text"
                name="serviceType"
                placeholder="Service Type"
                onChange={this.changeHandler}
            />

            <label htmlFor="workplace">Workplace</label>
            <input
                type="text"
                name="workplace"
                placeholder="Company Name"
                onChange={this.changeHandler}
            />

            <label htmlFor="timeAtJob">Time At Job</label>
            <input
                type="number"
                name="timeAtJob"
                placeholder="Length of Service(in months)"
                onChange={this.changeHandler}
            />

            <label htmlFor="tagline">$Cashtag</label>
            <input
                type="text"
                name="tagline"
                placeholder="Tagline"
                onChange={this.changeHandler}
            />

            <label htmlFor="bio">Bio</label>
            <textarea
                name="bio"
                placeholder="Tell something about yourself"
                onChange={this.changeHandler}
            />

            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.changeHandler}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.changeHandler}
            />


            <button type="submit">Submit!</button>
            </form>
            <h3>Already have account?</h3>
            <NavLink to="/login"><button>Login</button></NavLink>
        </div>
    )
}}