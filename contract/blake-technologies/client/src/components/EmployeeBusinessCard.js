import React, {useState, useEffect, useContext} from 'react'
import {Functionality} from '../context/Functionality'

export default function EmployeeBusinessCard(props){

    const {business} = props
    const {declined, underContract, processing, uncontacted, note, data, _id} = business
    const {name, email, phoneNumber, date, message} = data
    const {handleBusDelete, editBusiness, busInputs, setBusInputs, handleBusChange, handleBusSubmit} = useContext(Functionality)
    

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
}
function handleSubmit(e){
    e.preventDefault()
    editBusiness(_id, busInputs)
}
    
    return(
        <div className={uncontacted ? "businesses-wrapper-uncontacted" : processing ? "businesses-wrapper-processing" : underContract ? "businesses-wrapper-underContract" : declined && "businesses-wrapper-declined"}>
            <h3 className="businesses-wrapper-name">Business: {name}</h3>
            <h4 className="businesses-wrapper-email">Email: {email}</h4>
            <h4 className="businesses-wrapper-phone">Phone #: {phoneNumber}</h4>
            <h4 className="businesses-wrapper-message">Message: {message}</h4>
            <h4 className="businesses-wrapper-date">Date: {date}</h4>
            <h4 className="businesses-wrapper-note">Note: {note}</h4>
            <form className="business-notesForm" onSubmit={handleSubmit}>
                <textarea 
                    className="business-notesForm-textarea"
                    id="note"
                    name="note"
                    type="textarea"
                    value={busInputs.note}
                    onChange={handleBusChange}
                ></textarea>
                <button>Add Note</button>
            </form>
            <form className="businesses-form">
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
            <button className="businesses-delete" onClick={() => editBusiness(_id, radio)}>Transfer Business</button>
            <button className="businesses-delete" onClick={() => handleBusDelete(_id)}>Remove Business</button>
        </div>
    )
}