import React, { useState, useEffect } from 'react'
import Hamburger from './Hamburger.js'

export default function Navbar(){

    const [size, setSize] = useState(window.innerWidth)
    
    function resize() {
        setSize(window.innerWidth)
        console.log("width: ", size, "px")
        
    }
    window.onresize = resize;

    return(
        <>
        { size < 701 ? 
        <nav className="nav-mobile-container">
            <Hamburger />
            <div className="nav-mobile-nav">
                <h3 className="nav-mobile-home">Home</h3>
                <h3 className="nav-mobile-yardSales">Yard Sales</h3>
                <h3 className="nav-mobile-createSale">Create Sale</h3>
                <h3 className="nav-mobile-loginSignup">Login/Signup</h3>
                <h3 className="nav-mobile-search">Search</h3>
            </div>
        </nav>
        :
        <nav className="nav-container">
            <div className="nav-nav">
                <h3 className="nav-home">Home</h3>
                <h3 className="nav-yardSales">Yard Sales</h3>
                <h3 className="nav-createSale">Create Sale</h3>
                <h3 className="nav-loginSignup">Login/Signup</h3>
                <h3 className="nav-search">Search</h3>
            </div>
        </nav>
        }
        </>
    )
}