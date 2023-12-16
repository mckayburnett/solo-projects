import { Routes, Route, Navigate }from 'react-router-dom'
import { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import Home from './components/Home.js'
import Nav from './components/Nav.js'
import Create from './components/Create.js'
import Saved from './components/Saved.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { Context } from './context/Context.js'

export default function App() {
  const { token, logout } = useContext(Context)

  return (
    <div className="app-wrapper">
      { token && <Nav logout={logout}/>}
      <Routes>
        <Route 
          path="/"
          element={ token ? <Navigate to="/create" /> : <Home /> }
        />
        <Route 
          path="/saved"
          element={
            <ProtectedRoute token={token} redirectTo="/">
              <Saved />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/create"
          element={
            <ProtectedRoute token={token} redirectTo ="/">
              <Create />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}


