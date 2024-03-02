import React, {useState, useEffect, useContext} from 'react'
import { Functionality } from '../context/Functionality'

export default function EmployeePortal(){

    const {students, setStudents, userState, user} = useContext(Functionality)

    const{firstName, lastName, isAdmin} = user
    return(
        <div className="employeePortal-wrapper">
            <p className="employeePortal-welcome">{`Welcome, ${firstName} ${lastName} (${isAdmin && "Admin"}), to the`}</p>
            <h1 className="employeePortal-title">Employee Portal</h1>
        </div>
    )
}