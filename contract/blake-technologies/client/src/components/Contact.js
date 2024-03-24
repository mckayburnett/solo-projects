import React, {useState, useContext, useEffect, useRef} from 'react'
import { Functionality } from '../context/Functionality'
import { Text } from '../context/Text'
import { GoPaperAirplane } from "react-icons/go";


export default function Contact(){

    const {inputs, busInputs, setInputs, setBusInputs, handleChange, handleBusChange, addStudent, addBusiness, handleSubmit, handleBusSubmit, sendClicked, setSendClicked} = useContext(Functionality)
    const {contactUs} = useContext(Text)

    const [showBusiness, setShowBusiness] = useState(false);

    return(
        <div className="home-contact">
            <h1 className="home-subject-head">Contact Us</h1>
            <p className="home-subject-body">{contactUs}</p>
            <div className="home-contact-toggles">
                <button className="home-contact-toggles-business" onClick={()=>setShowBusiness(true)}>Business</button>
                <button className="home-contact-toggles-student" onClick={()=>setShowBusiness(false)}>Student</button>
            </div>
            {showBusiness && 
            <form className="home-contact-form" onSubmit={handleBusSubmit}>
                <input
                    id="name"                     
                    name="name"
                    value={busInputs.name}
                    placeholder="Name of Business*"
                    type="text"
                    required
                    onChange={handleBusChange}
                />
                <input
                    id="email"                     
                    name="email"
                    value={busInputs.email}
                    placeholder="Email*"
                    type="email"
                    required
                    onChange={handleBusChange}
                />
                <input
                    id="phoneNumber"                   
                    name="phoneNumber"
                    value={busInputs.phoneNumber}
                    placeholder="Phone Number*"
                    type="phone"
                    required
                    onChange={handleBusChange}
                />
                <input
                    id="date"                     
                    name="date"
                    value={busInputs.date}
                    type="date"
                    required
                    onChange={handleBusChange}
                />
                {/* <p className="placeholder">Tell us a little about your business and expectations</p> */}
                <textarea id="message" name="message" placeholder="What would you like us to know?" type="textarea" value={busInputs.message} onChange={handleBusChange}></textarea>
                 <button className={sendClicked ? "home-contact-form-button-clicked" : "home-contact-form-button"} id="contact-button" onClick={() => setSendClicked(true)}>
                    <GoPaperAirplane style = {{transform: 'rotate(-45deg)' }} className="send2" aria-hidden="true" />
                    <p>Send</p>
                </button>
            </form>
            }
            {!showBusiness &&
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
                {/* <select
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
                </select> */}
                {/* <p className="placeholder">Anything you'd like us to know?</p> */}
                <textarea id="message" name="message" placeholder="Anything you'd like us to know?" type="textarea" value={inputs.message} onChange={handleChange}></textarea>
                <button className={sendClicked ? "home-contact-form-button-clicked" : "home-contact-form-button"} id="contact-button" onClick={() => setSendClicked(true)}>
                    <GoPaperAirplane style = {{transform: 'rotate(-45deg)' }} className="send2" aria-hidden="true" />
                    <p>Send</p>
                </button>
            </form>
            }
        </div>
    )
}