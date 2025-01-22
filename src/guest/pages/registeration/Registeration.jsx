import React from 'react'
import Styles from "./registeration.module.scss"
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

const Registeration = () => {
  return (
    <div className={Styles.Container}>
      <div className={Styles.Main}>
        <div className={Styles.Heads}>
          <div className={Styles.Head}>
            <span className={Styles.Title}>Sign In</span>
            <div className={Styles.Links}>
              <span>or </span>
              <Link className={Styles.Link} to={'/login'}>login to your account</Link>
            </div>
          </div>
        </div>
        <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'></img>
      </div>
      <div className={Styles.Sub}>
        <TextField
          id="name"
          label="Name"
          variant="standard"
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
          className={Styles.customtextfield}
          sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "gray" }, // Default
            "&:hover .MuiInput-underline:before": { borderBottomColor: "#FF5200" }, // Hover
            "& .MuiInput-underline:after": { borderBottomColor: "#FF5200" }, // Focused
            "& .MuiInputLabel-root": { color: "gray" }, // Label color
            "& .MuiInputLabel-root.Mui-focused": { color: "#FF5200" } // Label on focus
          }}
        />
        <Button className={Styles.Button} variant="contained">Sign In</Button>
        <span className={Styles.Policy}>By creating an account, I accept the Terms & Conditions & Privacy Policy
        </span>
      </div>
    </div>
  )
}

export default Registeration