import React, {useState, useEffect, useContext} from 'react'
import { Functionality } from '../context/Functionality'

export default function EmployeePortal(){

    const {students, setStudents, userState, user, getAllStudents} = useContext(Functionality)

    useEffect(() => {
        getAllStudents()
        }, [])

    return(
        <div className="employeePortal-wrapper">
            <p className="employeePortal-welcome">{`Welcome, ${user.firstName} ${user.lastName} (${user.isAdmin && "Admin"}), to the`}</p>
            <h1 className="employeePortal-title">Employee Portal</h1>
            {students.map(student => {
                return(
                <h1>{student.firstName}</h1>
                )
            })}
        </div>
    )
}