import React, { useState } from 'react'
import Styles from './profile.module.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Box, Button, TextField } from '@mui/material'
import { MyTheme } from '../../context/ThemeContext'


const Profile = () => {
    const [check, setCheck] = useState(true)
    const [name, setName] = useState("Admin")
    const [email, setEmail] = useState("admin@gmail.com")
    const [password, setPassword] = useState("12345")


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = {
                name,
                email,
                password
            }
            const response = await axios.post('http://127.0.0.1:8000/profile', data)
            console.log('Profile changed successfully:', response.data);
            setName("")
            setEmail("")
            setPassword("")
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <MyTheme.Provider value={{ check, setCheck }}>
            <div className={`${check ? 'home light' : 'home dark'}`}>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <Box component={'form'} onSubmit={handleSubmit} className={Styles.Container}>
                    <div className={Styles.Banner}></div>
                    <div className={Styles.Sub}>
                        <div className={Styles.Text}>
                            <TextField className={Styles.Field} id="standard-basic" value={name} label="Name" variant="standard" onChange={(e) => setName(e.target.value)} />
                            <TextField className={Styles.Field} id="standard-basic" value={email} label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} />
                            <TextField className={Styles.Field} id="standard-basic" value={password} label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
                            <Button type='submit' className={Styles.Buttons} variant="contained">Submit</Button>
                        </div>
                        <div className={Styles.Image}>
                            <img src="https://img.freepik.com/premium-vector/vector-illustration-gray-silhouette-adult-man-white-background-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-1355.jpg?ga=GA1.1.1719564746.1730282531&semt=ais_hybrid" />
                        </div>
                    </div>

                </Box>
            </div>
        </div>
            </MyTheme.Provider >
        
    )
}

export default Profile