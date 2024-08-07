import { Grid, Typography, Paper, Box } from '@mui/material';
import styles from '../../../../../styles.module.css'
import React from 'react';
const StitchingCentersDetails = (props) => {
    const detailInfo = props.detailInfo;
    return (
        <>
            <Paper className='mainContainer' sx={{ boxShadow: 'none' }}>
                <Box>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item md={6}>
                            <Grid container spacing={2} sx={{ mt: 0 }}>
                                <Grid item md={5.5}>
                                    <Typography className={`${styles.list_table_body}`} sx={{ fontWeight: 'bold' }}>Stitching Center Code</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Stitching Center Name</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Stitching Center Email Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Stitching Center Address</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Stitching Center City</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Stitching Center Pincode</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Stitching Center Contact No</Typography>
                                </Grid>
                                <Grid item md={0.6}>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                </Grid>
                                <Grid item md={5.9}>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.stitching_center_code}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.stitching_center_name}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.stitching_center_email_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.stitching_center_address}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.stitching_center_city}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.stitching_center_pincode}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.stitching_center_contact_no}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
}

export default StitchingCentersDetails;
