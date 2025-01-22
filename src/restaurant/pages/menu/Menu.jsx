import React from 'react'
import Styles from './menu.module.scss'
import { Button, FormControlLabel, Switch, TextField } from '@mui/material'

const Menu = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Sub}>
        <TextField 
          className={Styles.Field} 
          id="standard-basic" 
          label="Name" 
          variant="standard" 
        />
        <TextField
            id="standard-multiline-flexible"
            className={Styles.Field}
            label="Description"
            multiline
            maxRows={4}
            variant="standard"
          />
        <TextField 
          className={Styles.Field} 
          id="standard-basic" 
          label="Price" 
          variant="standard" 
        />
        <FormControlLabel 
          className={Styles.Status} 
          control={<Switch defaultChecked />} 
          label="Status" 
          labelPlacement='start'
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

export default Menu