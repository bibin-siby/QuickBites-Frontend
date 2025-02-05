import React from 'react'
import Styles from './profile.module.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Box } from '@mui/material'

const Profile = () => {
    const [name, setName] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const data = {
            name
          }
          const response = await axios.post('http://127.0.0.1:8000/district', data)
          console.log('district add successful:', response.data);
          setName("")
        } catch (error) {
          console.error('Error registering:', error);
        }
      };

    return (
        <div className={Styles.Container}>
            <Sidebar />
            <div className={Styles.Sub}>
                <Navbar />
                <Box component={'form'} onSubmit={handleSubmit} className={Styles.Container}>
                    <div className={Styles.Banner}></div>
                    <div className={Styles.Sub}>
                        <div className={Styles.Text}>
                            <TextField className={Styles.Field} id="standard-basic" value={name} label="District Name" variant="standard" onChange={(e) => setName(e.target.value)} />
                            <TextField className={Styles.Field} id="standard-basic" value={name} label="District Name" variant="standard" onChange={(e) => setName(e.target.value)} />
                            <TextField className={Styles.Field} id="standard-basic" value={name} label="District Name" variant="standard" onChange={(e) => setName(e.target.value)} />
                            <Button type='submit' className={Styles.Buttons} variant="contained">Submit</Button>
                        </div>
                        <div className={Styles.Image}>
                            <img src="https://img.freepik.com/free-vector/urban-cityscape-isolated-white-background_1308-98973.jpg?t=st=1738040680~exp=1738044280~hmac=0e4f5b4bb610eec91ceb7b2deec96055025ad2bc7499b3fc4e74992348b554fd&w=1060" />
                        </div>
                    </div>

                </Box>
            </div>
        </div>
    )
}

export default Profile