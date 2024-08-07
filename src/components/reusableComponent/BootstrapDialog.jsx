import React from 'react';
import { DialogTitle, Dialog, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
// ----dilog ---- 
export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        paddingLeft: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export const BootstrapDialogTitle = (props) => {
    const { children, onClose, onClick, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 0.7, backgroundColor: '#00527c', color: '#ffff', float: 'left', fontSize: '15px', textTransform: 'uppercase', height: '36px' }} {...other} >
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        // position: 'absolute',
                        right: 8,
                        top: 0,
                        p: 0.5,
                        float: 'right'
                    }}
                >
                    <CloseIcon style={{ height: '18px', color: '#ffffff' }} />
                </IconButton>
            ) : null}
            {/* 
            {onClick ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        // position: 'absolute',
                        right: 8,
                        top: 8,
                        float: 'right'
                    }}
                >
                    <CloseIcon style={{ height: '18px', color: 'red' }} />
                </IconButton>
            ) : null} */}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    // onClick: PropTypes.func.isRequired,
};
// ----- dilog end