import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoApp } from './CarritoApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/card.css'
import './styles/lista.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp />
    </React.StrictMode>
  </BrowserRouter>
)
