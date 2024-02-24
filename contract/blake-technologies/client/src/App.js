import React, {useState, useContext, useEffect} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Nav.js'
import Home from './components/Home.js'
import Ios from './components/courses/Ios.js'
import Pricing from './components/finance/Pricing.js'
import Banking from './components/finance/Banking.js'
import Aid from './components/finance/Aid.js'
import Courses from './components/Courses.js'


function App() {

  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element= {<Home />}
        />
        <Route 
          path="/ios"
          element= {<Ios />}
        />
        <Route
          path="/pricing"
          element= {<Pricing />}
        />
        <Route
          path="/banking"
          element= {<Banking />}
        />
        <Route
          path="/aid"
          element= {<Aid />}
        />
        <Route 
          path="/courses"
          element= {<Courses />}
        />
      </Routes>
    </div>
  );
}

export default App;
