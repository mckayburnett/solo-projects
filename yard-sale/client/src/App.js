import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import CreateSale from './components/CreateSale.js'
import LoginSignup from './components/LoginSignup.js'
import YardSales from './components/YardSales.js'
//import ProtectedRoute from './components/ProtectedRoute.js'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      {/*token ? */<Navbar /*logout={logout}*//>}
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
          path='/YardSales'
          element={ <YardSales /> }
        />
      </Routes>
    </div>
  )
}

export default App;
