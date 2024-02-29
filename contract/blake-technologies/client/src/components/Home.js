import { useState, useEffect, useContext, useRef} from 'react'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Text} from '../context/Text.js'
import {Functionality} from '../context/Functionality.js'
import { FaCircle } from 'react-icons/fa'
import Contact from './Contact.js'

export default function Home(){

    const {aboutUs, whatWeOffer, testimonials} = useContext(Text)
    const {slideNum, setSlideNum, contactClicked, contact} = useContext(Functionality)

    console.log(window.scrollY
        )

    return(
        <div className="home-wrapper">
            <div className="home-aboutUs">
                <h1 className="home-subject-head">About Us</h1>
                <p className="home-subject-body">{aboutUs}</p>
            </div>
            <img
                className="home-img-1" 
                src="https://media.licdn.com/dms/image/C5603AQGhp9ir3aUuRA/profile-displayphoto-shrink_800_800/0/1576247114336?e=1714003200&v=beta&t=JTNEvM5VzzeMKWyU7ub45UzVPIOKZOW5XwGg1cZbebg"
            />
            <div className="home-whatWeOffer">
                <h1 className="home-subject-head">What We Offer</h1>
                <p className="home-subject-body">{whatWeOffer}</p>
                <Link to="/courses"><button className="home-subject-button" role="button"><span className="text">View Courses</span></button></Link>
            </div>
            <ReactPlayer
                className="home-video"
                url={slideNum === 0 ? "https://www.youtube.com/watch?v=jfKfPfyJRdk" : slideNum === 1 ? "https://www.youtube.com/watch?v=iicfmXFALM8" : slideNum === 2 && "https://www.youtube.com/watch?v=4xDzrJKXOOY"}
                width="100%"
                height="100%"
                controls
            />
            <div className="home-testimonials">
                <h1 className="home-subject-head">Testimonials</h1>
                <p className="home-subject-body">{testimonials[slideNum]}</p>
                <div className="home-testimonials-slide">
                    <FaCircle id="one" onClick={() => setSlideNum(0)} style={{ color: slideNum === 0 && "red"}} />
                    <FaCircle id="two" onClick={() => setSlideNum(1)} style={{ color: slideNum === 1 && "red"}} />
                    <FaCircle id="three" onClick={() => setSlideNum(2)} style={{ color: slideNum === 2 && "red"}} />
                </div>
            </div>
            <Contact />
        </div>
    )
}