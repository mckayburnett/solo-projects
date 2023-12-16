import React, {useState, useContext} from 'react'
import Home from './Home.js'
import Saved from './Saved.js'
import Create from './Create.js'
import { Context } from '../context/Context.js'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'

export default function Nav(props){

    const { logout, token, toggle, setToggle } = useContext(Context)

    return(
        <div className="nav-wrapper">
            <Link to='/' className="nav-home" onClick={() => setToggle(true)}>Home</Link>
            {token ? <Link to='/create' className="nav-create">Create</Link> : <h3 className="nav-create" onClick={() => setToggle(false)}>Create</h3>}
            <Link to='/saved' className="nav-saved">Saved</Link>
            { token ? 
            <h3 className="nav-logout" onClick={logout}>Logout</h3>
            :
            <h3 className="nav-logout" onClick={()=>setToggle(!toggle)}>Signup/Login</h3>
            }
        </div>
    )
}