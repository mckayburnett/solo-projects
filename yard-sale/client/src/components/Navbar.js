import React, { useState, useEffect, useContext } from 'react'
import Hamburger from './Hamburger.js'
import { Context } from './ContextProvider.js'
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom'
import Home from './Home.js'
import CreateSale from './CreateSale.js'
import LoginSignup from './LoginSignup.js'
import YardSales from './YardSales.js'

export default function Navbar(){

    const { hamClicked, setHamClicked } = useContext(Context)

    //window
    const [size, setSize] = useState(window.innerWidth)
    function resize() {
        setSize(window.innerWidth)
        console.log("width: ", size, "px")
        
    }
    window.onresize = resize;

    //hamburger
    return(
        <>
        { size < 701 ? 
        <nav className="nav-mobile-container" >
            <Hamburger />
            { hamClicked ? 
            <div className="nav-mobile-nav">
                <Link to='/' className="nav-mobile-home" onClick={() => setHamClicked(false)}>Home</Link>
                <Link to='yardSales' className="nav-mobile-yardSales" onClick={() => setHamClicked(false)}>Yard Sales</Link>
                {/*token ? */<Link to='createSale' className="nav-mobile-createSale" onClick={() => setHamClicked(false)}>Create Sale</Link>}
                <Link to='loginSignup' className="nav-mobile-loginSignup" onClick={() => setHamClicked(false)}>Login/Signup</Link>
                <div className="nav-mobile-carrot" onClick={() => setHamClicked(false)}>^</div>
            </div>
            :
            <></>
            }
        </nav>
        :
        <nav className="nav-container">
            <div className="nav-nav">
                <Link to='/' className="nav-home">Home</Link>
                <Link to='/yardSales' className="nav-yardSales">Yard Sales</Link>
                <Link to='/createSale' className="nav-createSale">Create Sale</Link>
                <Link to='/loginSignup' className="nav-loginSignup">Login/Signup</Link>
            </div>
        </nav>
        }
        </>
    )
}