import React, {useState, useContext} from 'react'
import Home from './Home.js'
import Saved from './Saved.js'
import Create from './Create.js'

export default function Nav(){

    return(
        <div className="nav-wrapper">
            <h2>Home in Nav</h2>
            <h2>Create in Nav</h2>
            <h2>Saved Codes in Nav</h2>
            <h2>Sign In/Out in Nav</h2>
        </div>
    )
}