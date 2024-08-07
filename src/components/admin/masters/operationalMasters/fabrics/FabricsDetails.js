import { Grid, Typography, Paper, Box } from '@mui/material';
import styles from '../../../../../styles.module.css'
import React from 'react';
const FabricsDetails = (props) => {
    const detailInfo = props.detailInfo;
    return (
        <>
            <Paper className='mainContainer' sx={{ boxShadow: 'none' }}>
                <Box>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item md={6}>
                            <Grid container spacing={2} sx={{ mt: 0 }}>
                                <Grid item md={3.6}>
                                    <Typography className={`${styles.list_table_body}`} sx={{ fontWeight: 'bold' }}>Fabric Code</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Fabric Name</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Brand Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Pattern Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Fabric Quality Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Compositions</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>GSM</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Thickness</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Colors</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Color Accuracy</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Fabric Feel Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Weight</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>EPI</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>PPI</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Width</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Category</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Fabric Use</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Occasion Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MRF Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Purchase Unit</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Sell Unit</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>MOQ</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Made In</Typography>

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
                                <Grid item md={7.8}>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.fabric_code}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.fabric_name}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.brand_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.pattern_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.fabric_quality_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.compositions}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.gsm}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.thickness}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.colors}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.color_accuracy}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.fabric_feel_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.weight}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.epi}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.ppi}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.width}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.category}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.fabric_use}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.occasion_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.purchase_unit}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.sell_unit}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.moq}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.made_in}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        
                    </Grid>
                </Box>
            </Paper>
        </>
    );
}

export default FabricsDetails;