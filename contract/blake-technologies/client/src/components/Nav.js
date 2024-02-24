import React, {useState, useContext, useEffect} from 'react'
import Ios from './courses/Ios.js'
import Logo from '../outside/Logo.png'
import {Context} from '../context/Context.js'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'


export default function Navbar(){

const {dropdownCoursesVisible, setDropdownCoursesVisible, dropdownFinanceVisible, setDropdownFinanceVisible, handleMouseEnter, handleMouseLeave} = useContext(Context)

    return(
        <div className="nav-wrapper">
            <div className="nav-container">
                <img 
                    className="nav-container-img"
                    src={Logo}
                    alt="Img loading/No Image Available"
                />
                <h1 className="nav-container-title">Blake Technologies</h1>
                <div className="nav-container-menus">
                    <div className="nav-container-menus-courses">Courses
                        <ul className="nav-container-menus-courses-dropdown">
                            <li><Link to="/ios"><a>iOS</a></Link></li>
                        </ul>
                    </div>
                    <div className="nav-container-menus-finance">Finance
                        <ul className="nav-container-menus-finance-dropdown">
                            <li><Link to="/pricing"><a>Pricing</a></Link></li>
                            <li><Link to="/banking"><a>Banking</a></Link></li>
                            <li><Link to="/aid"><a>Aid</a></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}