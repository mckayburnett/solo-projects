import React, {useState, useContext, useEffect, useRef} from 'react'
import { Functionality } from '../context/Functionality'
import { GoPaperAirplane } from "react-icons/go";


export default function Contact(){

    const {inputs, setInputs, handleChange, handleSubmit} = useContext(Functionality)

    return(
        <div className="home-contact">
            <h1 className="home-subject-head">Contact Us</h1>
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
                <select
                    id="course"
                    name="course"
                    value={inputs.course}
                    type="dropdown"
                    onChange={handleChange}
                >
                    <option id="option-one" value="">Course Interested In</option>
                    <option id="option-two" value="">iOS</option>
                    <option id="option-three" value="">Web Development</option>
                </select>
                <div className="home-contact-form-button">
                    <GoPaperAirplane style = {{transform: 'rotate(-45deg)' }} className="send2" aria-hidden="true" />
                    <p>Send</p>
                </div>
            </form>
        </div>
    )
}