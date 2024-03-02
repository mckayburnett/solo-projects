import React, {useState, useEffect, useContext} from 'react'
import {Functionality} from '../context/Functionality'
export default function Students(props){

    const {student} = props
    const {accepted, declined, enrolled, processing, uncontacted, data, _id} = student
    const {firstName, lastName, course, email, phoneNumber, date, message} = data
    const {handleDelete, handleChange} = useContext(Functionality)
    return(
        <div className={uncontacted ? "students-wrapper-uncontacted" : processing ? "students-wrapper-processing" : accepted ? "students-wrapper-accepted" : enrolled ? "students-wrapper-enrolled" : declined && "students-wrapper-declined"}>
            <h3 className="students-wrapper-namesCourse">{firstName} {lastName} ({course})</h3>
            <h4 className="students-wrapper-email">{email}</h4>
            <h4 className="students-wrapper-phone">{phoneNumber}</h4>
            <h4 className="students-wrapper-message">{message}</h4>
            <h4 className="students-wrapper-date">{date}</h4>
            <form>
                <input
                    type="radio"
                    name="uncontacted"
                    value={student.uncontacted}
                    checked={student.uncontacted}
                    onChange={handleChange}
                />
                <input
                    type="radio"
                    name="processing"
                    value={student.processing}
                    checked={student.processing}
                    onChange={handleChange}

                />
                <input
                    type="radio"
                    name="accepted"
                    value={student.accepted}
                    checked={student.accepted}
                    onChange={handleChange}

                />
                <input
                    type="radio"
                    name="enrolled"
                    value={student.enrolled}
                    checked={student.enrolled}
                    onChange={handleChange}

                />
                <input
                    type="radio"
                    name="declined"
                    value={student.declined}
                    checked={student.declined}
                    onChange={handleChange}

                />
            </form>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    )
}