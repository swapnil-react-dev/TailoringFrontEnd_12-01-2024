import React from 'react'

import { Icon, Breadcrumbs, Hidden, Typography, AppBar, Box } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
// import { styled, useTheme } from '@mui/styles'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { BackBtn } from './BackBtn';
import styles from './../../styles.module.css';
const Breadcrumb = ({ routeSegments }) => {
    return (
        <div position="static" className={`${styles.bredcrum}`}>
            <Box className={`${styles.bredcrum_in}`}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="smaller" />}
                    sx={{ fontSize: '12px' }}
                >
                    <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                        <span style={{ color: '#8c8c8c', fontWeight: 'bold' }}> Dashboard</span>
                    </NavLink>
                    {routeSegments
                        ? routeSegments.map((route, index) => {
                            return index !== routeSegments.length - 1 ? (
                                <NavLink key={index} to={route.path} style={{ textDecoration: 'none' }}>
                                    <span style={{ color: '#8c8c8c', fontWeight: 'bold' }}>
                                        {route.name}
                                    </span>
                                </NavLink>
                            ) : (
                                <span key={index} style={{ color: '#0783db', fontWeight: 'bold' }}>
                                    {route.name}
                                </span>
                            )
                        })
                        : null}
                </Breadcrumbs>
                <BackBtn />
            </Box>
        </div>
    )
}


export default Breadcrumb;



