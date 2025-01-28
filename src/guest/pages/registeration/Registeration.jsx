import React, { useState } from 'react'
import Styles from "./registeration.module.scss"
import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

const Registeration = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {

      const data = {
        name,
        email,
        password
      }
      const response = await axios.post('http://127.0.0.1:8000/userReg', data)
      setMessage('Registration successful!');
      console.log('Registration successful:', response.data);
    } catch (error) {
      setMessage('Error registering. Please try again.');
      console.error('Error registering:', error);
    }
  };


  return (
    <div className={Styles.Container}>
      <div className={Styles.Main}>
        <div className={Styles.Heads}>
          <div className={Styles.Head}>
            <span className={Styles.Title}>Sign In</span>
          </div>
        </div>
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'></img>
      </div>
      <Box component={'form'} onSubmit={handleSubmit} className={Styles.Sub}>
        <TextField
          id="name"
          label="Name"
          variant="standard"
          onChange={(e) => setName(e.target.value)}
          className={Styles.customtextfield}
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "gray" }, // Default
            "&:hover .MuiInput-underline:before": { borderBottomColor: "#FF5200" }, // Hover
            "& .MuiInput-underline:after": { borderBottomColor: "#FF5200" }, // Focused
            "& .MuiInputLabel-root": { color: "gray" }, // Label color
            "& .MuiInputLabel-root.Mui-focused": { color: "#FF5200" } // Label on focus
          }}
        />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}

          className={Styles.customtextfield}
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
          onChange={(e) => setPassword(e.target.value)}

          className={Styles.customtextfield}
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "gray" }, // Default
            "&:hover .MuiInput-underline:before": { borderBottomColor: "#FF5200" }, // Hover
            "& .MuiInput-underline:after": { borderBottomColor: "#FF5200" }, // Focused
            "& .MuiInputLabel-root": { color: "gray" }, // Label color
            "& .MuiInputLabel-root.Mui-focused": { color: "#FF5200" } // Label on focus
          }}
        />
        <Button type='submit' className={Styles.Button} variant="contained">Sign In</Button>
        <span className={Styles.Policy}>By creating an account, I accept the Terms & Conditions & Privacy Policy
        </span>
      </Box>
    </div>
  )
}

export default Registeration