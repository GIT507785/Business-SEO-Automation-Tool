import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import {Route, Routes} from 'react-router-dom'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App