import React, {useState, useContext} from 'react'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Creat from './components/Create.js'

function App() {
  return (
    <div className="app-wrapper">
      <nav>
        <Nav />
      </nav>
      <Home />
    </div>
  );
}

export default App;
