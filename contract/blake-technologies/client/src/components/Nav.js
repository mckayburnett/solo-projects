import React, {useState, useContext, useEffect} from 'react'
import Logo from '../outside/Logo.png'
import DdCourses from './dropdowns/DdCourses.js'
import DdFinance from './dropdowns/DdFinance.js'
import {Context} from '../context/Context.js'


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
                    <div className="nav-container-menus-courses" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <h3>Courses</h3>
                        {/*handleMouseEnter set dropdownVisible to true, checks then renders courses component*/}
                        {dropdownCoursesVisible && <DdCourses />} 
                    </div>
                    <div className="nav-container-menus-finance" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <h3>Finance</h3>
                        {/*handleMouseEnter set dropdownVisible to true, checks then renders finance component*/}
                        {dropdownFinanceVisible && <DdFinance />} 
                    </div>
                </div>
            </div>
        </div>
    )
}