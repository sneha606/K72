
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agencies from './pages/Agencies'
import Projects from './pages/Projects'
import Navbar from './components/navigation/Navbar'

import Fullnav from './components/navigation/Fullnav'
import NavcontextProvider from './context/Navcontext'

const App = () => {
 
  return (
    <>
  <NavcontextProvider>
<Navbar/>
<Fullnav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/agencies' element={<Agencies/>}/>
          <Route path='/projects' element={<Projects/>}/>
      </Routes>
      </NavcontextProvider>
    </>
  )
}

export default App
