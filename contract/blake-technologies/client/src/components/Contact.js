import React, {useState, useContext, useEffect, useRef} from 'react'
import { Functionality } from '../context/Functionality'
import { Text } from '../context/Text'
import { GoPaperAirplane } from "react-icons/go";


export default function Contact(){

    const {inputs, setInputs, handleChange, addStudent, handleSubmit, sendClicked, setSendClicked} = useContext(Functionality)
    const {contactUs} = useContext(Text)

    return(
        <div className="home-contact">
            <h1 className="home-subject-head">Contact Us</h1>
            <p className="home-subject-body">{contactUs}</p>
            <form className="home-contact-form" onSubmit={handleSubmit}>
                <input
                    id="firstName"
                    name="firstName"
                    value={inputs.firstName}
                    placeholder="First Name*"
                    type="text"
                    required
                    onChange={handleChange}
                />
                <input
                    id="lastName"
                    name="lastName"
                    value={inputs.lastName}
                    placeholder="Last Name*"
                    type="text"
                    required
                    onChange={handleChange}
                />
                <input
                    id="email"
                    name="email"
                    value={inputs.email}
                    placeholder="Email*"
                    type="email"
                    required
                    onChange={handleChange}
                />
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={inputs.phoneNumber}
                    placeholder="Phone Number"
                    type="phone"
                    onChange={handleChange}
                />
                <input 
                    id="date"
                    name="date"
                    value={inputs.date}
                    type="date"
                    required
                    onChange={handleChange}
                />
                <select
                    id="course"
                    name="course"
                    value={inputs.course}
                    type="dropdown"
                    required
                    onChange={handleChange}
                >
                    <option id="option-one" value="">Course Interested In</option>
                    <option id="option-two" value="ios">iOS</option>
                    <option id="option-three" value="web">Web Development</option>
                </select>
                <textarea
                    id="message"
                    name="message"
                    value={inputs.message}
                    placeholder="Anything you'd like us to know?"
                    type="textarea"
                    onChange={handleChange}
                />
                <button className={sendClicked ? "home-contact-form-button-clicked" : "home-contact-form-button"} onClick={() => setSendClicked(true)}>
                    <GoPaperAirplane style = {{transform: 'rotate(-45deg)' }} className="send2" aria-hidden="true" />
                    <p>Send</p>
                </button>
            </form>
        </div>
    )
}