import React, {useState, useEffect, useContext} from 'react'
import Nav from './Nav.js'
import Auth from './Auth.js'
import { Context } from '../context/Context'
import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'
import qrImage from '../images/qrImage.png'

export default function Home(props){

    const { toggle, setToggle, token, user } = useContext(Context)
    

    return(
        <div className="home-wrapper">
            <Nav />
            { toggle ? 
                <>
                <h1>QR Code Creator</h1>
                <img className="home-img" src={qrImage}></img>
                </>
            :
                <Auth />
            }
            { token ?
                <Link to="/create">Create</Link>
            :
                toggle ?
                    <h1 onClick={()=>setToggle(false)}>Create</h1>
                :    
                    <></>               
                
            }
            
        </div>
    )
}