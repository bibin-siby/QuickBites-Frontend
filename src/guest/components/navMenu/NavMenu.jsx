import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Login from '../../pages/login/Login';
import Registeration from '../../pages/registeration/Registeration';
import LoginIcon from '@mui/icons-material/Login';
import { Dialog, Slide } from '@mui/material';
import Styles from './navMenu.module.scss'
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavMenu() {
    const [login, setLogin] = React.useState(false);
    const [reg, setReg] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const loginOpen = () => {
        setLogin(true);
        setAnchorEl(null); // Close the menu when login button is clicked
    };

    const loginClose = () => {
        setLogin(false);
    };

    const regOpen = () => {
        setReg(true);
        setAnchorEl(null); // Close the menu when login button is clicked
    };

    const regClose = () => {
        setReg(false);
    };

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <PersonIcon className={Styles.Icon} />
                <span className={Styles.Title}>Accounts</span>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={loginOpen}>
                    <LoginIcon className={Styles.Icon} />
                    <span className={Styles.Title}>Login</span>
                </MenuItem>
                <MenuItem onClick={regOpen}>
                    <PersonAddIcon className={Styles.Icon} />
                    <span className={Styles.Title}>Sign In</span>
                </MenuItem>
            </Menu>

            <Dialog
                open={login}
                TransitionComponent={Transition}
                keepMounted
                onClose={loginClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="sm"
                PaperProps={{
                    style: { width: '400px' , background:"transparent"}
                }}
            >
                <Login />
            </Dialog>
            <Dialog
                open={reg}
                TransitionComponent={Transition}
                keepMounted
                onClose={regClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="sm"
                PaperProps={{
                    style: { width: '400px' },
                }}
            >
                <Registeration />
            </Dialog>
        </div>
    );
}
