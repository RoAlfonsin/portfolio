import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
          {/*Navbar*/}
          <Routes>
            <Route path="/" element={<h1>This is home</h1>} />
            <Route path="/bitacora" element={<h1>This is bitacora</h1>} />
            <Route path="/padelhub" element={<h1>This is padelhub</h1>} />
            <Route path="/ecommerce-toolkit" element={<h1>This is ecommerce-toolkit</h1>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
