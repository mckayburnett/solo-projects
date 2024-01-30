import React, { useState, useEffect } from 'react'

export default function Navbar(){

    return(
        <nav className="nav-nav">
            <h3 className="nav-home">Home</h3>
            <h3 className="nav-yardSales">Yard Sales</h3>
            <h3 className="nav-createSale">Create Sale</h3>
            <h3 className="nav-loginSignup">Login/Signup</h3>
            <h3 className="nav-search">Search</h3>
        </nav>

    )
}