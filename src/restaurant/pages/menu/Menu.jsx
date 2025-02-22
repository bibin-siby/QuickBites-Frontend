import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Styles from './menu.module.scss'
import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Menu = () => {
  return (
    <div className={Styles.Home}>
      <Sidebar />
      <div className={Styles.homeContainer}>
        <Navbar />
        <div className={Styles.Container}>
          <div className={Styles.Banner}></div>
          <div className={Styles.Main}>
            <div className={Styles.Sub}>
              <div className={Styles.Field}>
                <TextField
                  className={Styles.Field}
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                />
              </div>
              <div className={Styles.Field}>
                <TextField
                  id="standard-multiline-flexible"
                  className={Styles.Field}
                  label="Description"
                  multiline
                  maxRows={4}
                  variant="standard"
                />
              </div>
              <div className={Styles.Field}>
                <TextField
                  className={Styles.Field}
                  id="standard-basic"
                  label="Price"
                  variant="standard"
                /></div>
              <div className={Styles.Field}>
                <FormControlLabel
                  className={Styles.Status}
                  control={<Switch defaultChecked />}
                  label="Status"
                  labelPlacement='start'
                />
              </div>
              <div className={Styles.Buttons}>
                <Button
                  variant="contained"
                  className={Styles.Buttons}>
                  Submit
                </Button>
              </div>
            </div>
            <img src='https://img.freepik.com/free-vector/restaurant-menu-template_23-2147508919.jpg?ga=GA1.1.1719564746.1730282531&semt=ais_hybrid'></img>
          </div>

        </div>
        <div className={Styles.List}>
          <Card sx={{ width: 280 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coffee
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Price : ₹ 20
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">View More</Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 280 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coffee
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Price : ₹ 20
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">View More</Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 280 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coffee
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Price : ₹ 20
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">View More</Button>
            </CardActions>
          </Card>
          <Card sx={{ width: 280 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uxgpy3bwmc5rsojmtw43"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Coffee
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Price : ₹ 20
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">View More</Button>
            </CardActions>
          </Card>
          
          
        </div>
      </div>
    </div>


  )
}

export default Menu