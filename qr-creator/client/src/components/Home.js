import React, {useState, useEffect, useContext} from 'react'
import Nav from './Nav.js'
import Auth from './Auth.js'
import { Context } from '../context/Context'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'
import qrImage from '../images/qrImage.png'

export default function Home(props){

    const { toggle, setToggle, token, user } = useContext(Context)
    
console.log(user)
    return(
        <div className="home-wrapper">
            { user.email && <h3 className="home-greeting">Hello, <span className="home-greeting-user">{user.email}</span>!</h3> }
            { toggle ? 
                <>
                <h1 className="home-title">QR Code Creator</h1>
                <h3 className="home-description">1. Login or Signup <br></br><br></br>2. Create a custom QR Code using the URL to link the code to your site<br></br><br></br>3. View and access your saved and private QR Codes</h3>
                <img className="home-img" src={qrImage}></img>
                </>
            :
                <Auth />
            }
        </div>
    )
}