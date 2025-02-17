import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../guest/pages/index/Index'
import CreateRestaurant from '../guest/pages/createRestaurant/CreateRestaurant'

const GuestRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/createRestaurant' element={<CreateRestaurant />} />
      </Routes>
    </div>
  )
}

export default GuestRoutes