import React, {useState, useEffect, useContext} from 'react'
import { Functionality } from '../context/Functionality'
import StudentCard from './EmployeeStudentCard.js'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'

export default function EmployeePortal(){

    const {students, setStudents, userState, user, viewStudentList, setViewStudentList, getAllStudents} = useContext(Functionality)

    useEffect(() => {
        getAllStudents()
        
    },[])

    return(
        <div className="employeePortal-wrapper">
            <p className="employeePortal-welcome">{`Welcome, ${user.firstName} ${user.lastName} (${user.isAdmin && "Admin"}), to the`}</p>
            <h1 className="employeePortal-title">Employee Portal</h1>
            <div className="employeePortal-links">
                <Link to="/studentList">Student List</Link>
                <Link to="/blogPost">Create Blog Post</Link>
            </div>
        </div>
    )
}