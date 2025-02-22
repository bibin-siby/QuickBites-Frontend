import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../guest/pages/index/Index'
import CreateRestaurant from '../guest/pages/createRestaurant/CreateRestaurant'
import RestaurantRegister from '../guest/pages/restaurantRegister/RestaurantRegister'

const GuestRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/createRestaurant' element={<CreateRestaurant />} />
        <Route path='/restaurantRegister' element={<RestaurantRegister />} />
        <Route path='/dboyRegister' element={<RestaurantRegister />} />
      </Routes>
    </div>
  )
}

export default GuestRoutes