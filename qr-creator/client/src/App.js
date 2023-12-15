import { Routes, Route, Navigate }from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Home from './components/Home.js'
import Nav from './components/Nav.js'
import Create from './components/Create.js'
import Saved from './components/Saved.js'

export default function App() {

  return (
    <div className="app-wrapper">
      <Nav />
      <Home />
    </div>
  );
}


