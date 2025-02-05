import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../guest/pages/index/Index'

const GuestRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </div>
  )
}

export default GuestRoutes