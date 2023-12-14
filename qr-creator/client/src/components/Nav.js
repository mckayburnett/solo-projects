import React, {useState, useContext} from 'react'
import Home from './Home.js'
import Saved from './Saved.js'
import Create from './Create.js'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'

export default function Nav(){

    return(
        <div className="nav-wrapper">
            <h2>Home in Nav</h2>
            <h2>Create in Nav</h2>
            <h2>Saved Codes in Nav</h2>
            <h2>Sign In/Out in Nav</h2>
            <Link to='/' className="nav-home">Home</Link>
            <Link to='/create' className="nav-create">Create</Link>
            <Link to='/saved' className="nav-saved">Saved</Link>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />
                <Route path='/saved' element={<Saved />} />
            </Routes>
        </div>
    )
}