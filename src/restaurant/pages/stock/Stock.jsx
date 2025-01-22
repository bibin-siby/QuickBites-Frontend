import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import React from 'react'
import Styles from './stock.module.scss'

const Stock = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Sub}>
        <TextField 
          className={Styles.Field} 
          id="standard-basic" 
          label="Dish" 
          variant="standard" 
        />
        <TextField
            id="standard-multiline-flexible"
            className={Styles.Field}
            label="Quantity"
            multiline
            variant="standard"
          />
        <TextField 
          className={Styles.Field} 
          id="standard-basic" 
          label="Date" 
          variant="standard" 
        />
        <Button 
          variant="contained"
          className={Styles.Buttons}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Stock