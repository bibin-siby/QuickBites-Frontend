import React from 'react'
import Home from '../restaurant/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Menu from '../restaurant/pages/menu/Menu'
import Discounts from '../restaurant/pages/discounts/Discounts'
import Stock from '../restaurant/pages/stock/Stock'

const RestaurantsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/discounts' element={<Discounts/>}></Route>
        <Route path='/stock' element={<Stock/>}></Route>

      </Routes>
  </div>
  )
}

export default RestaurantsRoutes