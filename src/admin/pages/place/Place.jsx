import React, { useEffect, useState } from 'react'
import Styles from './place.module.scss'
import { Box, Button, TextField } from '@mui/material'
import { MyTheme } from '../../context/ThemeContext'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'

const Place = () => {
    const [check, setCheck] = useState(true)
    const [name, setName] = useState("")
    const [district_id, setDistrict] = useState("")
    const [city_id, setCity] = useState("")
    const [districtData, setDistirctdata] = useState([])
    const [cityData, setCitydata] = useState([])

    const handleSubmit = async (e) => {
        console.log(district_id);
        e.preventDefault();
        try {
            const data = {
                name,
                city_id
            }
            const response = await axios.post('http://127.0.0.1:8000/place', data)
            console.log('Place added successful:', response.data);
            setName("")
            setDistrict("")
            setCity("")
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    const fetchDistrict = () => {
        axios.get(`http://127.0.0.1:8000/district`).then((response) => {
            console.log(response.data);
            setDistirctdata(response.data)
        });
    };
    useEffect(() => {
        fetchDistrict()
    }, [])
    const fetchCity = (district_id) => {
        console.log(district_id);
        axios.get(`http://127.0.0.1:8000/city/${district_id}`).then((response) => {
            console.log(response.data);
            setCitydata(response.data)
        });
    };


    return (
        <MyTheme.Provider value={{ check, setCheck }}>
            <div className={`${check ? 'home light' : 'home dark'}`}>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <Box component={"form"} onSubmit={handleSubmit} className={Styles.Container} >
                        <div className={Styles.Banner}></div>
                        <div className={Styles.Sub}>
                            <div className={Styles.Text}>
                                <select
                                    onChange={(e) => {
                                        setDistrict(e.target.value);
                                        fetchCity(e.target.value);
                                    }}
                                    className={Styles.Sel}
                                    value={district_id}>
                                    <option>District</option>
                                    {
                                        districtData && districtData.map((item, index) => (
                                            <option key={index} value={item._id}>{item.name}</option>

                                        ))
                                    }
                                </select>
                                <select
                                    onChange={(e) => setCity(e.target.value)}
                                    className={Styles.Sel}
                                    value={city_id}>
                                    <option>City</option>
                                    {
                                        cityData && cityData.map((item, index) => (
                                            <option key={index} value={item._id}>{item.name}</option>

                                        ))
                                    }
                                </select>
                                <TextField className={Styles.Field} id="standard-basic" label="Place Name"
                                    value={name}
                                    variant="standard" onChange={(e) => setName(e.target.value)} />
                                <Button type="submit" variant="contained" className={Styles.Buttons}>Submit</Button>
                            </div>
                            <div className={Styles.Image}>
                                <img src='https://img.freepik.com/free-vector/urban-landscape-with-high-skyscrapers_1308-127997.jpg?ga=GA1.1.1719564746.1730282531'></img>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </MyTheme.Provider >
    )
}

export default Place