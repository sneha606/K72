import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import Navcontext from './context/Navcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navcontext>
  <Stairs>
    <App />
  </Stairs>
</Navcontext>

    </BrowserRouter>
  </StrictMode>
)
