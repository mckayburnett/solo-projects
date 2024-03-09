import React, {useState, uesEffect, useContext} from 'react'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'
import {Functionality} from '../context/Functionality.js'
import Logo from '../outside/Logo.png'

export default function BottomNav(){

    const {homeClick} = useContext(Functionality)

    return(
        <div className="bottomNav-wrapper">
            <img 
                className="bottomNav-logo"
                src={Logo}
                alt="Img loading/No Image Available"
                onClick={homeClick}
            />
            <div className="bottomNav-line"></div>
            <div className="bottomNav-links">
                <div className="bottomNav-company">
                    <h3>Company</h3>
                    <Link to="/"><p>About</p></Link>
                    <Link to="/courses"><p>Courses</p></Link>
                </div>
                <div className="bottomNav-finances">
                    <h3>Finances</h3>
                    <p>Bank Aid</p>
                </div>
                <div className="bottomNav-connect">
                    <h3>Connect</h3>
                    <Link to="/contact"><p>Contact Us</p></Link>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
        </div>
    )
}