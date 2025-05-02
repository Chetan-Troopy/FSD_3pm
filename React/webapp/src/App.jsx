import React from 'react'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router'
import Home from './pages/Home'

function App() {
  return (
    <>

        <Router>
            <Navbar/>
            <div className="container mt-2">
              <Routes>
                  <Route path='/' element={<Home/>}/>
              </Routes>
            </div>
        </Router>
    
    </>
  )
}

export default App