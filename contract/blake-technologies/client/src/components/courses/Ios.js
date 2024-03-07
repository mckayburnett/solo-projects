import React, {useState, useEffect, useContext} from 'react'
import course from '../../outside/Course.pdf'
import {Text} from '../../context/Text.js'
import {Functionality} from '../../context/Functionality.js'
import pic1 from '../../outside/ios-pic1.jpg'
import pic2 from '../../outside/ios-pic2.jpg'

export default function Ios(){

    const {description, mappedArr, iosSubTitle, daily} = useContext(Text)
    const {viewObj, setViewObj} = useContext(Functionality)

    return(
        <div className="ios-wrapper">
            <a className="ios-pdf" href={course}>View/Download PDF of course info</a>
            <div className="ios-top-content">
                <h1 className="ios-title">iOS Course</h1>
                <p className="ios-description">{description}</p>
            </div>
            <div className="ios-mid-content">
                    <div className="ios-pic1-box">
                        <img src={pic1} className="ios-pic1"/>
                    </div>
                    <h2 className="ios-obj-title">Course Objectives: </h2>
                    <div className={viewObj && "ios-obj-subTitle-container-center"}>
                    <h3 className="ios-obj-subTitle">{iosSubTitle}</h3>
                    <button className="ios-mid-button" onClick={() => setViewObj(!viewObj)}>Click to {viewObj ? `Close` : `View`}</button>
                    </div>
                    {viewObj && <div className="ios-obj-body-wrapper">{mappedArr}</div>}
                </div>
            <div className="ios-midBottom-content">
                {daily}
                <div className="ios-pic2-box">
                    <img src={pic2} className="ios-pic2" />
                </div>
            </div>
        </div>
    )
}