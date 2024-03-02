import React, {useState, useEffect, useContext} from 'react'

export default function Students(props){

    const {student} = props
    const {accepted, declined, enrolled, processing, uncontacted, data} = student
    const {firstName, lastName, course, email, phoneNumber, message} = data
    return(
        <div className="students-wrapper">
            <h3>{firstName} {lastName} ({course})</h3>
            <h4>{email}</h4>
            <h4>{phoneNumber}</h4>
            <h4>{message}</h4>
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
        </div>
    )
}