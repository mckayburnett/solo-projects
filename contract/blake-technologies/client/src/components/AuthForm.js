import React, {useState, useContext, useEffect} from 'react'
import {Functionality} from '../context/Functionality.js'

export default function AuthForm(){

    const {handleChange} = useContext(Functionality)
    
    return(
        <div className="authForm-wrapper">
            <form className="authForm-form">
            <input
                className="authForm-form-email"
                type="text"
                value={auth.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                className="authForm-form-password"
                type="password"
                value={auth.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button>Login</button>
            </form>
        </div>
    )
}