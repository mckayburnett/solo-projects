import React, {useState, useContext, useEffect, useRef} from 'react'
import { Functionality } from '../context/Functionality'

export default function Contact(){

    const {inputs, setInputs, handleChange} = useContext(Functionality)

    return(
        <div className="home-contact">
            <h1 className="home-subject-head">Contact Us</h1>
            <form className="home-contact-form">
                <input
                    className="home-contact-form-firstName"
                    name="firstName"
                    value={inputs.firstName}
                    placeholder="First Name*"
                    type="text"
                    required
                    onChange={handleChange}
                />
                <input
                    className="home-contact-form-lastName"
                    name="lastName"
                    value={inputs.lastName}
                    placeholder="Last Name*"
                    type="text"
                    required
                    onChange={handleChange}
                />
                <input
                    className="home-contact-form-email"
                    name="email"
                    value={inputs.email}
                    placeholder="Email*"
                    type="email"
                    required
                    onChange={handleChange}
                />
                <input
                    className="home-contact-form-phoneNumber"
                    name="phoneNumber"
                    value={inputs.phoneNumber}
                    placeholder="Phone Number"
                    type="phone"
                    onChange={handleChange}
                />
                <input
                    className="home-contact-form-course"
                    name="course"
                    value={inputs.course}
                    placeholder="Course Interested In"
                    type="dropdown"
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}