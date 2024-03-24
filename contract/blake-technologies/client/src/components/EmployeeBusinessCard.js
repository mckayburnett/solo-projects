import React, {useState, useEffect, useContext} from 'react'
import {Functionality} from '../context/Functionality'

export default function EmployeeBusinessCard(props){

    const {business} = props
    const {declined, underContract, processing, uncontacted, data, _id} = business
    const {name, email, phoneNumber, date, message} = data
    const {handleBusDelete, editBusiness} = useContext(Functionality)
    

const initRadio = {
    uncontacted: false,
    processing: false,
    underContract: false,
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
        <div className={uncontacted ? "students-wrapper-uncontacted" : processing ? "students-wrapper-processing" : underContract ? "students-wrapper-enrolled" : declined && "students-wrapper-declined"}>
            <h3 className="students-wrapper-namesCourse">{name}</h3>
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
                    checked={business.uncontacted}
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
                    checked={business.processing}
                    onChange={handleChangeRadio}
                />
                </label>
                </div>
                <div>
                    <label>UndCon
                   <input
                    type="radio"
                    name="underContract"
                    value={true}
                    checked={business.underContract}
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
                    checked={business.declined}
                    onChange={handleChangeRadio}
                />
                </label>
                </div>
            </form>
            <button className="students-delete" onClick={() => editBusiness(_id, radio)}>Transfer Business</button>
            <button className="students-delete" onClick={() => handleBusDelete(_id)}>Remove Business</button>
        </div>
    )
}