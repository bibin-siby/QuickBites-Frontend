import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../guest/pages/index/Index'
import Login from '../guest/pages/login/Login'
import Registeration from '../guest/pages/registeration/Registeration'

const GuestRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registeration/>} />
      </Routes>
    </div>
  )
}

export default GuestRoutes