import React, { useEffect } from 'react'
import MainRoutes from './routes/MainRoutes'
import Styles from './app.module.scss'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const App = () => {
  return (
    <div className={Styles.Main}>
      <MainRoutes />
    </div>
  )
}

export default App