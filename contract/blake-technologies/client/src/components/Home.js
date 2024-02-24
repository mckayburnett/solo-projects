import { useState, useEffect, useContext} from 'react'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'
import {Text} from '../context/Text.js'

export default function Home(){

    const {aboutUs, whatWeOffer} = useContext(Text)

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
                <Link to="/courses"><button className="home-subject-button" role="button"><span class="text">View Courses</span></button></Link>
            </div>
        </div>
    )
}