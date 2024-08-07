import { Grid, Typography, Paper, Box } from '@mui/material';
import styles from '../../../../../styles.module.css'
import React from 'react';
const ManufacturersDetails = (props) => {
    const detailInfo = props.detailInfo;
    return (
        <>
            <Paper className='mainContainer' sx={{ boxShadow: 'none' }}>
                <Box>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item md={6}>
                            <Grid container spacing={2} sx={{ mt: 0 }}>
                                <Grid item md={4.4}>
                                    <Typography className={`${styles.list_table_body}`} sx={{ fontWeight: 'bold' }}>MFR Name</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR Type</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR Address</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR City</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR Pincode</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR State</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR Country</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR GST NO</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR PAN NO</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR Contact No</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR Email Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR Contact Person</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MFR Brands</Typography>


                                </Grid>
                                <Grid item md={0.6}>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    
                        
                                </Grid>
                                <Grid item md={7}>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_name}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_type}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_address}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_city}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_pincode}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_state}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_country}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_gst_no}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_pan_no}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_contact_no}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_email_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_contact_person}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_brands}</Typography>
                                   
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
}

export default ManufacturersDetails;