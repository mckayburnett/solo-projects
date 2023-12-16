import React, {useState, useEffect, useContext} from 'react'
import Nav from './Nav.js'
import Auth from './Auth.js'
import { Context } from '../context/Context'
import qrImage from '../images/qrImage.png'

export default function Home(props){

    const { toggle } = useContext(Context)
    console.log('home toggle', toggle)

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
            
        </div>
    )
}