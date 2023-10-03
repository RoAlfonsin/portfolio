import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/navbar.jsx'
import { Home } from './views/home.jsx'
import { Bitacora } from './views/bitacora.jsx'
import { EcommerceToolkit } from './views/etoolkit.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/padelhub" element={<h1>This is padelhub</h1>} />
            <Route path="/ecom" element={<EcommerceToolkit />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
