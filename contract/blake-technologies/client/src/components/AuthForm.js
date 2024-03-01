import React, {useState, useContext, useEffect} from 'react'
import {Functionality} from '../context/Functionality.js'

export default function AuthForm(){

    const {auth, handleChangeAuth, handleAuthSubmit, token, logout} = useContext(Functionality)
    
    return(
        <div className="authForm-wrapper">
            <h4 className="authForm-title">{token ? `Employee Portal Logout`:`Employee Portal Login`}</h4>
            <form className="authForm-form" onSubmit={token ? logout : handleAuthSubmit}>
                {!token && <input
                    className="authForm-form-email"
                    name="email"
                    type="text"
                    value={auth.email}
                    onChange={handleChangeAuth}
                    placeholder="Email"
                />}
                {!token && <input
                    className="authForm-form-password"
                    type="password"
                    name="password"
                    value={auth.password}
                    onChange={handleChangeAuth}
                    placeholder="Password"
                />}
                <button>{token ? `Logout`:`Submit`}</button>
            </form>
        </div>
    )
}