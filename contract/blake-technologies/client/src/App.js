import React, {useState, useContext, useEffect} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Nav.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import EmployeePortal from './components/EmployeePortal.js'
import StudentList from './components/EmployeeStudentList.js'
import BlogPost from './components/EmployeeBlog.js'
import Home from './components/Home.js'
import Ios from './components/courses/Ios.js'
import Pricing from './components/finance/Pricing.js'
import Banking from './components/finance/Banking.js'
import Aid from './components/finance/Aid.js'
import Courses from './components/Courses.js'
import Contact from './components/Contact.js'
import BottomNav from './components/BottomNav.js'
import { Functionality } from './context/Functionality.js'


function App() {

  const {token} = useContext(Functionality)

  return (
    <div className="app-wrapper">
      <Navbar />
      {token && <EmployeePortal />}
      <Routes>
        <Route
          path="/employeePortal"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <EmployeePortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studentList"
          element= {
            <ProtectedRoute token={token} redirectTo="/">  
              <StudentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogPost"
          element= {
            <ProtectedRoute token={token} redirectTo="/">  
              <BlogPost />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/"
          element= {<Home />}
        />
        <Route
          path="/contact"
          element= {<Contact />}
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
      <BottomNav />
    </div>
  );
}

export default App;
