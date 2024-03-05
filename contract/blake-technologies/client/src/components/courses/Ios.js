import React, {useState, useEffect, useContext} from 'react'
import course from '../../outside/Course.pdf'
import {Text} from '../../context/Text.js'
import pic1 from '../../outside/ios-pic1.jpg'

export default function Ios(){

    const {description, objectives} = useContext(Text)

    return(
        <div className="ios-wrapper">
            <a className="ios-pdf" href={course}>View/Download PDF of course info</a>
            <div className="ios-top-content">
                <h1 className="ios-title">iOS Course</h1>
                <p className="ios-description">{description}</p>
                <div className="ios-mid-content">
                    <div className="ios-pic1-box">
                        <img src={pic1} className="ios-pic1"/>
                    </div>
                    <h2 className="ios-obj-title">Course Objectives: </h2>
                    <p className="ios-obj-body">{objectives}</p>
                </div>
                
            </div>
            
        </div>
    )
}