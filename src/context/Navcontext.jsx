// src/context/Navcontext.jsx
import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NavbarContext = createContext()
export const NavcolorContext=createContext()
const NavcontextProvider = ({ children }) => {
  const [navOpen, setNavopen] = useState(false)
  const[navColor,setnavColor]=useState("white")

  const locate=useLocation().pathname
  useEffect(()=>{
    if(locate==="/projects" || locate==="/agencies"){
        setnavColor("black")
    } else{
        setnavColor("white")
    }
  },[locate])

  return (
    <NavbarContext.Provider value={[navOpen, setNavopen]}>
        <NavcolorContext.Provider value={[navColor,setnavColor]}>
      {children}
      </NavcolorContext.Provider>
    </NavbarContext.Provider>
  )
}

export default NavcontextProvider

