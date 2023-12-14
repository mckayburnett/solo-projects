import React, {useState, useEffect, useContext} from 'react'
import qrImage from '../images/qrImage.png'

export default function Home(props){

    return(
        <div className="home-wrapper">
            <h1>home</h1>
            <img class="home-img" src={qrImage}></img>
            <button>Create</button>
        </div>
    )
}