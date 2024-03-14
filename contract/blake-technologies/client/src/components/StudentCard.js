import React, {useState, useEffect, useContext} from 'react'
import {Functionality} from '../context/Functionality'

export default function StudentCard(props){

    const {student} = props
    const {accepted, declined, enrolled, processing, uncontacted, data, _id} = student
    const {firstName, lastName, course, email, phoneNumber, date, message} = data
    const {handleDelete, editStudent} = useContext(Functionality)
    

const initRadio = {
    uncontacted: false,
    processing: false,
    accepted: false,
    enrolled: false,
    declined: false,
};
const [radio, setRadio] = useState(initRadio)
function handleChangeRadio(e){
    const {name, value} = e.target
    setRadio(prev => ({
        ...initRadio,
        [name]: value
    }))
    
    console.log(radio)
}
    
    return(
        <div className={uncontacted ? "students-wrapper-uncontacted" : processing ? "students-wrapper-processing" : accepted ? "students-wrapper-accepted" : enrolled ? "students-wrapper-enrolled" : declined && "students-wrapper-declined"}>
            <h3 className="students-wrapper-namesCourse">{firstName} {lastName} ({course})</h3>
            <h4 className="students-wrapper-email">Email: {email}</h4>
            <h4 className="students-wrapper-phone">Phone #: {phoneNumber}</h4>
            <h4 className="students-wrapper-message">Message: {message}</h4>
            <h4 className="students-wrapper-date">{date}</h4>
            <form className="students-form">
                <div>
                   <label>Un
                    <input
                    type="radio"
                    name="uncontacted"
                    value={true}
                    checked={student.uncontacted}
                    onChange={handleChangeRadio}
                    />
                </label> 
                </div>
                <div>
                    <label>Pro
                    <input
                    type="radio"
                    name="processing"
                    value={true}
                    checked={student.processing}
                    onChange={handleChangeRadio}
                />
                </label>
                </div>
                <div>
                    <label>Acc
                   <input
                    type="radio"
                    name="accepted"
                    value={true}
                    checked={student.accepted}
                    onChange={handleChangeRadio}
                /> 
                </label>
                </div>
                <div>
                  <label>En
                    <input
                    type="radio"
                    name="enrolled"
                    value={true}
                    checked={student.enrolled}
                    onChange={handleChangeRadio}
                />
                </label>  
                </div>
                <div>
                    <label>De
                    <input
                    type="radio"
                    name="declined"
                    value={true}
                    checked={student.declined}
                    onChange={handleChangeRadio}
                />
                </label>
                </div>
            </form>
            <button className="students-delete" onClick={() => editStudent(_id, radio)}>Transfer Student</button>
            <button className="students-delete" onClick={() => handleDelete(_id)}>Remove Student</button>
        </div>
    )
}