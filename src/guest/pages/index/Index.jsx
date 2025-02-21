import React from 'react'
import Styles from './index.module.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Filter from '../../components/filters/Filter'
import Restaurants from '../../components/restaurants/Restaurants'
import Best from '../../components/best/Best'
import Mind from '../../components/mind/Mind'
import Banner from '../../components/banner/Banner'

const Index = () => {
  return (
    <div className={Styles.Container}>
      <Navbar />
      <div className={Styles.Sub}>
        <Mind />
      </div>
      <div className={Styles.Content}>
        <Filter />
        <Restaurants />
        <Best />
      </div>
      <Footer />
    </div>
  )
}

export default Index