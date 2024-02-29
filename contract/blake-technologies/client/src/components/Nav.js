import React, {useState, useContext, useEffect, useRef} from 'react'
import Ios from './courses/Ios.js'
import Logo from '../outside/Logo.png'
import {Functionality} from '../context/Functionality.js'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'


export default function Navbar(){

const {homeClick, coursesClick, topRef, showButton} = useContext(Functionality)


    return(
        <div className="nav-wrapper" ref={topRef}>
            <div className="nav-container">
                <img 
                    className="nav-container-img"
                    src={Logo}
                    alt="Img loading/No Image Available"
                    onClick={homeClick}
                />
                <h1 className="nav-container-title" onClick={homeClick}>Blake Technologies</h1>
                <div className="nav-container-menus">
                    <Link to="/" className="nav-container-menus-home">Home</Link>
                    <div className="nav-container-menus-courses"><div onClick={coursesClick}>Courses</div>
                        <ul className="nav-container-menus-courses-dropdown">
                            <li><Link to="/ios"><a>iOS</a></Link></li>
                            <li><a>Web Dev</a></li>
                        </ul>
                    </div>
                    <div className="nav-container-menus-finance">Finance
                        <ul className="nav-container-menus-finance-dropdown">
                            <li><Link to="/pricing"><a>Pricing</a></Link></li>
                            <li><Link to="/banking"><a>Banking</a></Link></li>
                            <li><Link to="/aid"><a>Aid</a></Link></li>
                        </ul>
                    </div>
                    <div className="nav-container-menus-getStarted">Get Started
                        <ul className="nav-container-menus-getStarted-dropdown">
                            <li><Link to="/apply"><a>Apply</a></Link></li>
                            <li><Link to="/contact"><a>Contact Us</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
           {showButton && <button className="scroll-button">Scroll to Top</button>}
        </div>
    )
}