import React, { useState } from 'react'
import Styles from "./discounts.module.scss"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


const Discounts = () => {
  
  return (
    <div className={Styles.Container}>
      <div className={Styles.Sub}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Dish</InputLabel>
          <Select
            className={Styles.Field} 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>Masala Dosa</MenuItem>
            <MenuItem value={20}>Chicken Biriyani</MenuItem>
            <MenuItem value={30}>Veg Biriyani</MenuItem>
          </Select>
        </FormControl>
        <TextField 
          className={Styles.Field} 
          id="standard-basic" 
          label="Percentage" 
          variant="standard" 
        />
        <Button className={Styles.Buttons}>Submit</Button>
      </div>
    </div>
  )
}

export default Discounts