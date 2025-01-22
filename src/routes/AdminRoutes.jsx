import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../admin/pages/home/Home'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default AdminRoutes