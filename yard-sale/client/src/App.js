import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import CreateSale from './components/CreateSale.js'
import LoginSignup from './components/LoginSignup.js'
import YardSales from './components/YardSales.js'
import MySale from './components/MySale.js'
//import ProtectedRoute from './components/ProtectedRoute.js'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="app-wrapper">
      {/*token ? */<Navbar /*logout={logout}*//>}
      <h1 className="app-title">Yard Sale</h1>
      <Routes>
        <Route 
          path='/'
          element={ <Home /> }
        />
        <Route 
          path='/createSale'
          //<ProtectedRoute token={token} redirectTo='/'
          element={ <CreateSale /> }
          //</ProtectedRoute>
        />
        <Route 
          path='/loginSignup'
          element={ <LoginSignup /> }
        />
        <Route 
          path='/yardSales'
          element={ <YardSales /> }
        />
        <Route
          path='/mySale'
          element={ <MySale /> }
        />
      </Routes>
    </div>
  )
}

export default App;
