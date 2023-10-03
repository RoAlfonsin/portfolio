import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './views/home.jsx';
import { Bitacora } from './views/bitacora.jsx';
import { PadelHub } from './views/padelHub.jsx';
import { EcommerceToolkit } from './views/etoolkit.jsx';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-icons/font/bootstrap-icons.css";

import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  { path: '/', 
    element: <Home />,
  },
  { path: '/bitacora', 
    element: <Bitacora />,
  },
  { path: '/padelhub', 
    element: <PadelHub />,
  },
  { path: '/ecom', 
    element: <EcommerceToolkit />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
