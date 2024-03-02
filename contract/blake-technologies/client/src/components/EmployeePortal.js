import React, {useState, useEffect, useContext} from 'react'
import { Functionality } from '../context/Functionality'
import Students from './Students.js'

export default function EmployeePortal(){

    const {students, setStudents, userState, user, getAllStudents} = useContext(Functionality)

    useEffect(() => {
        getAllStudents()
        
    },[])

    const student = (students?.students?.map(student => student))
    console.log(student)
    

    return(
        <div className="employeePortal-wrapper">
            <p className="employeePortal-welcome">{`Welcome, ${user.firstName} ${user.lastName} (${user.isAdmin && "Admin"}), to the`}</p>
            <h1 className="employeePortal-title">Employee Portal</h1>
            <div className="employeePortal-studentList">
                {student && student.map(student => 
                    <Students student={student} key={student._id}/>    
                )}
            </div>
        </div>
    )
}