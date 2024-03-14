import React, {useEffect, useContext, useState} from 'react'
import {Functionality} from '../context/Functionality.js'

export default function EmployeePost(props){

    const {/*getAllPosts*/} = useContext(Functionality)

    return(
        <div className="employeePost-wrapper">
            <h1 className="employeePost-title"></h1>
            <h2 className="employeePost-subtitle"></h2>
            <h4 className="employeePost-author"></h4><h4 className="employeePost-date"></h4>
            <p className="employeePost-content"></p>
            <img className="employeePost-img1" />
            <img className="employeePost-img2" />
            <img className="employeePost-img3" />
        </div>
    )
}