import React, { useState } from 'react'
import Styles from "./login.module.scss"
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password
      }
      const response = await axios.post('http://127.0.0.1:8000/login', data)
      console.log('login successful:', response.data);
      setEmail("")
      setPassword("")
    } catch (error) {
      console.error('Error registering:', error);
    }
  };


  return (
    <Box component={'form'} onSubmit={handleSubmit} className={Styles.Container}>
      <div className={Styles.Main}>
        <div className={Styles.Heads}>
          <div className={Styles.Head}>
            <span className={Styles.Title}>Login</span>
          </div>
        </div>
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'></img>
      </div>
      <div className={Styles.Sub}>
        <TextField
          id="email"
          label="Email"
          variant="standard"
          className={Styles.customtextfield}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "gray" }, // Default
            "&:hover .MuiInput-underline:before": { borderBottomColor: "#FF5200" }, // Hover
            "& .MuiInput-underline:after": { borderBottomColor: "#FF5200" }, // Focused
            "& .MuiInputLabel-root": { color: "gray" }, // Label color
            "& .MuiInputLabel-root.Mui-focused": { color: "#FF5200" } // Label on focus
          }}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type='password'
          className={Styles.customtextfield}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "gray" }, // Default
            "&:hover .MuiInput-underline:before": { borderBottomColor: "#FF5200" }, // Hover
            "& .MuiInput-underline:after": { borderBottomColor: "#FF5200" }, // Focused
            "& .MuiInputLabel-root": { color: "gray" }, // Label color
            "& .MuiInputLabel-root.Mui-focused": { color: "#FF5200" } // Label on focus
          }}
        />        <Button  type="submit"  className={Styles.Button} variant="contained">Log In</Button>
        <span className={Styles.Policy}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</span>
      </div>
    </Box>
  )
}

export default Login