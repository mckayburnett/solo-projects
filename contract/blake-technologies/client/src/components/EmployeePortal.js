import React, {useState, useEffect, useContext} from 'react'
import { Functionality } from '../context/Functionality'
import Students from './Students.js'

export default function EmployeePortal(){

    const {students, setStudents, userState, user, viewStudentList, setViewStudentList, getAllStudents} = useContext(Functionality)

    useEffect(() => {
        getAllStudents()
        
    },[])

    const student = (students?.students?.map(student => student))
    const uncontactedNum = student?.filter(student=> student.uncontacted === true).length  
    const processingNum = student?.filter(student => student.processing === true).length  
    const acceptedNum = student?.filter(student => student.accepted === true).length 
    const enrolledNum = student?.filter(student => student.enrolled === true).length
    const declinedNum = student?.filter(student => student.declined === true).length  
 

    return(
        <div className="employeePortal-wrapper">
            <p className="employeePortal-welcome">{`Welcome, ${user.firstName} ${user.lastName} (${user.isAdmin && "Admin"}), to the`}</p>
            <h1 className="employeePortal-title">Employee Portal</h1>
            <div className="employeePortal-buttons">
                <button className="employeePortal-buttons-viewStudents" onClick={() => setViewStudentList(!viewStudentList)}>{viewStudentList ? "Remove Student List":"View Student List"}</button>
            </div>
            {viewStudentList && <div className="employeePortal-grid">
                <h2 className="employeePortal-grid-uncontacted">Uncontacted({uncontactedNum})</h2><h2 className="employeePortal-grid-processing">Processing ({processingNum})</h2><h2 className="employeePortal-grid-accepted">Accepted ({acceptedNum})</h2><h2 className="employeePortal-grid-enrolled">Enrolled ({enrolledNum})</h2><h2 className="employeePortal-grid-declined">Declined ({declinedNum})</h2>
            </div>}
                {viewStudentList && <div className="employeePortal-studentList">
                    {student && student?.map(student => 
                        <Students student={student} key={student._id}/>    
                    )}
                </div>}
            
        </div>
    )
}