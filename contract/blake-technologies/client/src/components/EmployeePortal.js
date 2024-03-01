import React, {useState, useEffect, useContext} from 'react'
import { Functionality } from '../context/Functionality'

export default function EmployeePortal(){

    const {students, setStudents} = useContext(Functionality)

    return(
        <div className="employeePortal-wrapper">
            <h1>Employee Portal</h1>
        </div>
    )
}