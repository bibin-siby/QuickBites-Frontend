import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import { MyTheme } from '../../context/ThemeContext'

const Home = () => {
  const [check,setCheck] = useState(true)
  return (
    <MyTheme.Provider value={{check,setCheck}}>
    <div className={`${check ? 'home light' : 'home dark'}`}>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
      </div>
    </div>
  </MyTheme.Provider>
  )
}

export default Home