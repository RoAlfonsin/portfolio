import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/navbar.jsx'
import { Home } from './views/home.jsx'
import { Bitacora } from './views/bitacora.jsx'
import { EcommerceToolkit } from './views/etoolkit.jsx'
import { PadelHub } from './views/padelHub.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/padelhub" element={<PadelHub />} />
            <Route path="/ecom" element={<EcommerceToolkit />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
