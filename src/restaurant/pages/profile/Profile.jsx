import React, { useState } from 'react'
import Styles from './profile.module.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Button, TextField } from '@mui/material'
import ChangePassword from '../changePassword/ChangePassword'

const Profile = () => {
    const [name, setName] = useState("Name")
    const [email, setEmail] = useState("email@gmail.com")
    const [password, setPassword] = useState("***")
    const [address, setAddress] = useState("Moolamattom")

    return (
        <div className={Styles.Home}>
            <Sidebar />
            <div className={Styles.homeContainer}>
                <Navbar />
                <div className={Styles.Container}>
                    <div className={Styles.Banner1}></div>
                    <div className={Styles.Img}>
                        <img src='https://img.freepik.com/free-vector/business-collapse-crisis-restaurant-empty-restaurant-cafe-depressed-man-sitting-inside-stress-burnout-bankruptcy-company_575670-1272.jpg?ga=GA1.1.1719564746.1730282531&semt=ais_hybrid'></img>
                    </div>
                    <div className={Styles.Main}>
                        <div className={Styles.Content}>
                            <div className={Styles.LabelsContainer}>
                                <span className={Styles.Labels}>Restaurant Name</span>
                                <span className={Styles.Labels}>Email</span>
                                <span className={Styles.Labels}>Password</span>
                                <span className={Styles.Labels}>Address</span>
                            </div>
                            <div className={Styles.FieldsContainer}>
                                <TextField className={Styles.Field} value={name} variant="standard" />
                                <TextField className={Styles.Field} value={email} variant="standard" />
                                <TextField className={Styles.Field} value={password} variant="standard" />
                                <TextField className={Styles.Field} value={address} variant="standard" />
                            </div>

                        </div>
                        <div className={Styles.Buttonsgroup}>
                            <Button
                                type='submit'
                                variant="contained"
                                className={Styles.Buttons}>
                                Submit
                            </Button>
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile