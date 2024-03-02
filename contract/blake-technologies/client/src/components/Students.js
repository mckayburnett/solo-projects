import React, {useState, useEffect, useContext} from 'react'
import {Functionality} from '../context/Functionality'
export default function Students(props){

    const {student} = props
    const {accepted, declined, enrolled, processing, uncontacted, data, _id} = student
    const {firstName, lastName, course, email, phoneNumber, date, message} = data
    const {handleDelete} = useContext(Functionality)
    return(
        <div className={uncontacted ? "students-wrapper-uncontacted" : processing ? "students-wrapper-processing" : accepted ? "students-wrapper-accepted" : enrolled ? "students-wrapper-enrolled" : declined && "students-wrapper-declined"}>
            <h3>{firstName} {lastName} ({course})</h3>
            <h4>{email}</h4>
            <h4>{phoneNumber}</h4>
            <h4>{message}</h4>
            <h4>{date}</h4>
            <form>
                <input
                    type="radio"
                    name="uncontacted"
                    value={student.uncontacted}
                    checked={student.uncontacted}
                />
                <input
                    type="radio"
                    name="processing"
                    value={student.processing}
                    checked={student.processing}
                />
                <input
                    type="radio"
                    name="accepted"
                    value={student.accepted}
                    checked={student.accepted}
                />
                <input
                    type="radio"
                    name="enrolled"
                    value={student.enrolled}
                    checked={student.enrolled}
                />
                <input
                    type="radio"
                    name="declined"
                    value={student.declined}
                    checked={student.declined}
                />
            </form>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    )
}