import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import Register from './pages/register'
import Otp from './pages/otp'
import Login from './pages/login'
import Profile from './pages/profile'
import Auth from './pages/auth/Auth'

const App = () => {
  return useRoutes(
    [
      {
        path: '/', element: <Layout />, children: [
          { index: true, element: <Home /> },
          { path: 'register', element: <Register /> },
          { path: 'otp', element: <Otp /> },
          { path: 'login', element: <Login /> },
          { path: '/', element: <Auth />, children: [
            { path: 'profile', element: <Profile /> },
          ] },
        ]
      }
    ]
  )
}

export default React.memo(App)