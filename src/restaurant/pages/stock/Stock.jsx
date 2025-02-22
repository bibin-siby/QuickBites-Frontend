import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import React from 'react'
import Styles from './stock.module.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6, "Good", "Active"),
  createData('Ice cream sandwich', 237, 9, "Good", "Active"),
  createData('Eclair', 262, 16, "Good", "Active"),
  createData('Cupcake', 305, 3, "Good", "Deactive"),
  createData('Gingerbread', 356, 16, "Good", "Deactive"),
];


const Stock = () => {
  return (
    <div className={Styles.Home}>
      <Sidebar />
      <div className={Styles.homeContainer}>
        <Navbar />
        <div className={Styles.Container}>
          <div className={Styles.Banner}></div>
          <div className={Styles.Main}>
            <div className={Styles.Sub}>
              <TextField
                className={Styles.Field}
                id="standard-basic"
                label="Dish"
                variant="standard"
              />
              <TextField
                id="standard-multiline-flexible"
                className={Styles.Field}
                label="Quantity"
                multiline
                variant="standard"
              />
              <div className={Styles.Dates}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Expiry Date" sx={{ width: 200 }} />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <Button
                variant="contained"
                className={Styles.Buttons}>
                Submit
              </Button>
            </div>
            <img src='https://img.freepik.com/premium-photo/female-manager-analyzing-delivery-service-growth-using-data-visualization-warehouse_762128-1416.jpg?ga=GA1.1.1719564746.1730282531&semt=ais_hybrid'></img>
          </div>
        </div>
          <TableContainer component={Paper} className={Styles.Lists} >
            <Table sx={{ width: 1000 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Dish</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Details</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
    </div>


  )
}

export default Stock