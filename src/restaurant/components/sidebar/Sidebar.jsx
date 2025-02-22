import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SellIcon from '@mui/icons-material/Sell';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SystemSecurityUpdateIcon from '@mui/icons-material/SystemSecurityUpdate';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="top">
                <span className="logo">Restaurant</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <Link to="/restaurant/menu">
                            <MenuBookIcon className="icon" />
                            <span>Menu</span>
                        </Link>
                    </li>
                    <li>
                        <SellIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <Link to="/restaurant/stock">
                            <InventoryIcon className="icon" />
                            <span>Stock</span>
                        </Link>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <AssessmentIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <Link to="/restaurant/profile">
                            <AccountBoxIcon className="icon" />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>


                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
            </div>

        </div>
    )
}

export default Sidebar