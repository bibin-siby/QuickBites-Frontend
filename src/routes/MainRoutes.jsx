import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GuestRoutes from './GuestRoutes'
import AdminRoutes from './AdminRoutes'
import RestaurantsRoutes from './RestaurantsRoutes'

const MainRoutes = () => {
  return (
    <div><Routes>
            <Route path='/*' element={<GuestRoutes />} />   
            <Route path='/admin/*' element={<AdminRoutes/>} /> 
            <Route path='/restaurant/*' element={<RestaurantsRoutes/>} />       
        </Routes>
    </div>
  )
}

export default MainRoutes