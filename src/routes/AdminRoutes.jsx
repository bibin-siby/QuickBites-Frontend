import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../admin/pages/home/Home'
import Districts from '../admin/pages/districts/Districts'
import City from '../admin/pages/city/City'
import Place from '../admin/pages/place/Place'
import Profile from '../admin/pages/profile/Profile'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/district' element={<Districts />}></Route>
        <Route path='/city' element={<City />}></Route>
        <Route path='/place' element={<Place />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  )
}

export default AdminRoutes