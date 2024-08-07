import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../reusableComponent/Breadcrumb";
import { Box, Button, Grid, MenuItem, Paper, Snackbar, Typography } from "@mui/material";
import { Cancel } from "../../../../reusableComponent/BackBtn";
import { TLRinput, TLRinputNo } from "../../../../reusableComponent/ErpTextField";
import { useLocation, useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import styles from '../../../../../styles.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dateConversionOnEntryPage } from "../../../../reusableComponent/dateConversionOnEntryPage";
import { addStitchingCenters,editDeleteStitchingCenters } from "../../../../../actions/actions"


const StitchingCentersAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;
    const editid = editData ? editData.stitching_center_id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);

    const [data, setData] = useState({
        stitching_center_code : editData ? editData.stitching_center_code : '',
        stitching_center_name : editData ? editData.stitching_center_name : '',
        stitching_center_email_id : editData ? editData.stitching_center_email_id : '',
        stitching_center_address : editData ? editData.stitching_center_address : '',
        stitching_center_city : editData ? editData.stitching_center_city : '',
        stitching_center_pincode : editData ? editData.stitching_center_pincode : '',
        stitching_center_contact_no : editData ? editData.stitching_center_contact_no : ''

    });

    const handleChange = ({ target }) => {
        const value = target.value;
        setData({
            ...data,
            [target.name]: value,
        });
        data[target.name] = target.value;
    }

    const [shouldShowMsg, setShouldShowMsg] = useState(false);
    const responseMessage = useSelector(state => state.role.message);

    useEffect(() => {
        if (responseMessage) {
            setShouldShowMsg(true);
        }
    }, [responseMessage, dispatch]);

    useEffect(() => {
        if (shouldShowMsg) {
            if (responseMessage !== null) {
                if (responseMessage === 'User Role already available !') {
                    setSuccessMessage(responseMessage)
                    setShouldShowMsg(false);
                    dispatch({ type: 'RESET_MESSAGE' });
                    setTimeout(() => {
                        setSuccessMessage(false)
                    }, 2000)

                } else {
                    setShouldShowMsg(true);
                    navigate(-1, { responseMessage });
                }
            }
        }
    }, [shouldShowMsg, responseMessage]);
    const onSubmit = (event) => {
        const roleData = {
            ...data,
            stitching_center_id: editid,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            is_standard: 0, 
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            dispatch(editDeleteStitchingCenters(roleData));
        } else {
            dispatch(addStitchingCenters(roleData));
        }
    }

    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Stitching Centers' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create Stitching Centers Add
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <Grid container spacing={2} style={{ minHeight: '350px', paddingLeft: '50px' }}>
                            <Grid item md={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <Grid container spacing={1} sx={{ mt: 0 }}>
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Stitching Center Code</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="stitching_center_code"
                                            value={(data.stitching_center_code)}
                                        />
                                    </Grid>
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Stitching Center Name</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="stitching_center_name"
                                            value={(data.stitching_center_name)}
                                        />
                                    </Grid>
                                   
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Stitching Center Email Id</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="stitching_center_email_id"
                                            value={(data.stitching_center_email_id)}
                                        />
                                    </Grid>
                                
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Stitching Center Address</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="stitching_center_address"
                                            value={(data.stitching_center_address)}
                                        />
                                    </Grid>
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Stitching Center City</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="stitching_center_city"
                                            value={(data.stitching_center_city)}
                                        />
                                    </Grid>
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Stitching Center Pincode</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="stitching_center_pincode"
                                            value={(data.stitching_center_pincode)}
                                        />
                                    </Grid>
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Stitching Center Contact No</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="stitching_center_contact_no"
                                            value={(data.stitching_center_contact_no)}
                                        />
                                    </Grid>
                                   
                                    
                                    <Grid item xs={12} className={`${styles.grid_input}`}>
                                        <Box sx={{ marginTop: '12px', float: 'right' }}>
                                            <Button color="primary" id={`${styles.btn_save}`} variant="contained" type="submit">
                                                <SaveIcon style={{ fontSize: '16px', marginRight: '10px' }} />  {editData ? 'Update' : 'Save'}
                                            </Button>
                                            <Cancel />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
                {successMessage &&
                    <Snackbar
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        open={successMessage}
                        autoHideDuration={2000}
                        message={successMessage}
                    />
                }
            </Paper>
        </>
    )
}
export default StitchingCentersAdd;