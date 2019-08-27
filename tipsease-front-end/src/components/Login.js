import React from 'react';

export default function Login(){
    return (
        <div>
        <h2>Login</h2>
        <form>
            <label htmlFor="email"> Email</label>
            <input
                type="email"
                name="email"
                placeholder="email"
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder="password"
            />
        </form>
        </div>
    )
}