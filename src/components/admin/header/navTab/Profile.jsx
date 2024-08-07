import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, ListItem, ListItemIcon, ListItemText, Avatar } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from "react-redux";
// import { logout } from "../../actions/actions";

export default function Profile() {

  const login_details = sessionStorage.getItem('loginUser');
  const userD = JSON.parse(login_details);
  const userInfo = userD && userD.userInfo;
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // dispatch(logout())
    navigate('/admin')
  };

  return (
    <Box>
      <AccountCircleIcon onClick={handleClick} sx={{ color: '#ffffff' }} />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ maxHeight: '40%' }}
      >
        <MenuItem style={{ fontSize: '10px', fontWeight: 500 }}> {userInfo && userInfo.company}</MenuItem>
        <MenuItem style={{ fontSize: '10px', fontWeight: 500 }}> {userInfo && userInfo.nameOfPerson}</MenuItem>
        {userInfo && (userInfo.userRole == 'superAdmin' || userInfo.userRole === 'Admin') &&
          < MenuItem sx={{ display: 'flex', justifyContent: 'space-between' }} onClick={handleClose}>
            <NavLink to="/settings">
              <Button size="small" color="primary" style={{ fontSize: '10px', padding: 3 }}>
                <SettingsIcon style={{ fontSize: '14px', marginRight: '12px' }} />
                Settings
              </Button>
            </NavLink>
          </MenuItem>
        }
        <MenuItem onClick={handleLogout} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button size="small" color="primary" style={{ fontSize: '10px', padding: 3 }}>
            <ExitToAppIcon style={{ fontSize: '14px', marginRight: '12px' }} />
            Log Out
          </Button>
        </MenuItem>
      </Menu>
    </Box >
  );
}
