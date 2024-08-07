import { Grid, Typography, Paper, Box } from '@mui/material';
import styles from '../../../../../styles.module.css'
import React from 'react';
const TailorShopsDetails = (props) => {
    const detailInfo = props.detailInfo;
    return (
        <>
            <Paper className='mainContainer' sx={{ boxShadow: 'none' }}>
                <Box>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item md={6}>
                            <Grid container spacing={2} sx={{ mt: 0 }}>
                                <Grid item md={5.5}>
                                    <Typography className={`${styles.list_table_body}`} sx={{ fontWeight: 'bold' }}>Tailor Shop Code</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Tailor Shop Name</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Tailor Shop Email Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Tailor Shop Address</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Stitching Center City</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Tailor Shop City</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Stitching Center Id</Typography>
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
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.tailor_shop_code}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.tailor_shop_name}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.tailor_shop_email_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.tailor_shop_address}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.tailor_shop_city}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.tailor_shop_pincode}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.stitching_center_id}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
}

export default TailorShopsDetails;
