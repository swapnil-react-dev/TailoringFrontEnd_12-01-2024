
import { Button } from '@mui/material';
// import { Icon } from '@iconify/react';
import React from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { NavLink, useNavigate } from 'react-router-dom'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import styles from './../../styles.module.css';


export const BackBtn = () => {
    let navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);

    }
    return (

        <Button onClick={() => handleBack()}
            style={{ padding: '1px', color: '#00527c', cursor: 'pointer', fontFamily: 'Roboto","Helvetica","Arial",sans-serif', fontSize: '12px' }}>
            <ArrowLeftIcon viewBox="0 0 4 24" icon="icon-park-twotone:back" style={{ color: '#00527c', marginRight: '5px' }} /> Back</Button>
    );
};



export const Cancel = () => {
    let navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <Button onClick={() => handleBack()} id={`${styles.btn_cancel}`}
            style={{ backgroundColor: '#e02a1d', color: '#ffffff', float: 'right', marginLeft: '5px', cursor: 'pointer', fontFamily: 'Roboto","Helvetica","Arial",sans-serif', fontSize: '15px' }}>
           <CancelOutlinedIcon style={{fontSize:'16px', marginRight:'8px'}}/>  Cancel </Button>

    );
};


