import { useState, useEffect, useContext} from 'react'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'
import {Text} from '../context/Text.js'
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdComputer } from "react-icons/md";


export default function Courses(){

    const {courses, ios, web} = useContext(Text)

    return(
        <div className="courses-wrapper">
            <div className="courses-block"></div>
            <div className="courses-content">
                <h1 className="courses-content-title">Courses</h1>
                <p className="courses-content-body">{courses}</p>
            </div>
            <div className="courses-ios">
                <MdOutlinePhoneIphone className="courses-ios-icon"/>
                <h4 className="courses-subject-text">{ios}</h4>
                <div className="courses-button-container">
                    <Link to="/ios"><button className="courses-button" role="button"><span class="text">Learn More</span></button></Link>
                </div>            
            </div>
            <div className="courses-web">
                <MdComputer className="courses-web-icon" />
                <h4 className="courses-subject-text">{web}</h4>
                <div className="courses-button-container">
                    <button className="courses-button" role="button"><span class="text">Learn More</span></button>
                </div>
            </div>
        </div>
    )
}