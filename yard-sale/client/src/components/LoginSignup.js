import React, { useContext, useState, useEffect } from 'react'

export default function LoginSignup(props){

    return (
        <div className="login-wrapper">
            <form className="login-form">
                <input 
                    className="login-form-email"
                    placeholder="Email"
                    type="email"
                />
                <input 
                    className="login-form-password"
                    placeholder="Password"
                    type="password"
                />
                {/*token ? */<button className="login-form-button">Login</button> /*: <button className="login-form-button" onClick={() => signup}>Signup</button>*/}
            </form>
        </div>
    )
}