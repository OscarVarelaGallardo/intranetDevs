import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LayoutHome from './layout/LayoutHome'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecursosHumanos from './components/RecursosHumanos'
import Supervisor from './layout/Supervisor'

const route = createBrowserRouter([
  {
    path: '/',
    element: <LayoutHome/>,
    children: [

      {
        path: '/iniciar_sesion',
        element: <h1>iniciar-sesion</h1>
      },
      {
        path: '/nosotros',
        element: <h1>nosotros</h1>
      },
      {
        path: '/avisos',
        element: <h1>avisos</h1>
      },
      {
        path: '/colaboradores',
        element: <h1>colaboradores</h1>
      },
      {
        path: '/contacto',
        element: <h1>contacto</h1>
      },
      {
        path: '/soporteIT',
        element: <h1>soporte</h1>
      },
      {
        path: '/repositorio',
        element: <h1>repositorio</h1>
      },
      {
        path: '/recursos-humanos',
        element:<RecursosHumanos />
      },
      {
        path: '/supervisor',
        element: <Supervisor />
      }



    ]

  },

])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route} />

  </React.StrictMode>,
)
