import React, { useState } from 'react'
import Styles from './restaurantRegister.module.scss'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CallIcon from '@mui/icons-material/Call';
import { Box, Button, IconButton, TextField } from '@mui/material';
import axios from 'axios'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



const RestaurantRegister = () => {

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [name, setName] = useState("")
  const [photo, setPhoto] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("photo", photo); // Append file
    data.append("name", name);
    data.append("email", email);
    data.append("address", address);
    data.append("password", password);

    try {
      const response = await axios.post("http://127.0.0.1:8000/restaurantRegister/", data);
      console.log("Restaurant added successfully:", response.data);

      // Reset form fields
      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setPhoto(null);
      document.getElementById("photoInput").value = ""; // Clear file input
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
  return (
    <div className={Styles.Container}>
      <div className={Styles.Navbar}>
        <div className={Styles.Logo}>
          <DeliveryDiningIcon className={Styles.Icon} />
          <span className={Styles.Title}>QuickBites</span>
        </div>
        <div className={Styles.Help}>
          <CallIcon className={Styles.Icon} />
          <span className={Styles.Helptext}>Need Help?</span>
          <span className={Styles.Helptext}>Call +91 00 00 00 00 00</span>
        </div>
      </div>
      <div className={Styles.Content}>
        <div className={Styles.Banner}>
          <div className={Styles.Head}>
            <span>Complete your registration</span>
          </div>
          <div className={Styles.Details}>
            <div className={Styles.Cell}>
              <img src='https://b.zmtcdn.com/data/o2_assets/472f589fff7dc51f8c02e1827f895f761715062518.png'></img>
              <div className={Styles.Detail}>
                <span className={Styles.Cellhead}>Restaurant Information</span>
                <span className={Styles.Cellbody}>Name, Location and contact number</span>
              </div>

            </div>
            <div className={Styles.Cell}>
              <img src='https://b.zmtcdn.com/data/o2_assets/6a45315ad2a665eebcc0e593ada2c0601715062549.png'></img>
              <div className={Styles.Detail}>
                <span className={Styles.Cellhead}>Menu and Operational Details</span>
                <span className={Styles.Cellbody}>Dish names, images and other details</span>

              </div>
            </div>
          </div>

        </div>
        <Box component={'form'} onSubmit={handleSubmit} className={Styles.Form}>
          <span className={Styles.Headtext}>Restaurant Information</span>
          <div className={Styles.Field}>
            <span className={Styles.Main}>Restaurant Name</span>
            <span className={Styles.Sub}>Customers will see this name on Zomato</span>
            <TextField id="standard-basic" label="Restaurant Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={Styles.Field}>
            <span className={Styles.Main}>Email</span>
            <span className={Styles.Sub}>Zomato will use this detail for all business communications and updates</span>
            <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={Styles.Field}>
            <span className={Styles.Main}>Account Credentials</span>
            <span className={Styles.Sub}>Use this credential to log in to your account</span>
            <TextField id="standard-basic" label="Password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className={Styles.Field}>
            <span className={Styles.Main}>Restaurant Address</span>
            <span className={Styles.Sub}>Address details are basis the restaurant location</span>
            <TextField id="standard-basic" label="Address" variant="standard" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className={Styles.Field}>
          <span className={Styles.Main}>Restaurant Photo</span>
          <span className={Styles.Sub}>A restaurant's profile photo builds brand identity and attracts customers</span>
            <IconButton
              component="label"
              role={undefined}
            >
              Browse files to upload
              < CloudUploadIcon />
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => setPhoto(event.target.files[0])}
              />
            </IconButton>
          </div>
          <div className={Styles.Button}>
            <Button variant="contained" type="submit">Submit</Button>
          </div>
        </Box>
      </div>

    </div>
  )
}

export default RestaurantRegister