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
import { addManufracturers,editDeleteManufracturers } from "../../../../../actions/actions"


const ManufacturersAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;
    const editid = editData ? editData.mfr_id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);

    const [data, setData] = useState({
        mfr_name : editData ? editData.mfr_name : '',
        mfr_type : editData ? editData.mfr_type : '',
        mfr_address : editData ? editData.mfr_address : '',
        mfr_city : editData ? editData.mfr_city : '',
        mfr_pincode : editData ? editData.mfr_pincode : '',
        mfr_state : editData ? editData.mfr_state : '',
        mfr_country : editData ? editData.mfr_country : '',
        mfr_gst_no : editData ? editData.mfr_gst_no : '',
        mfr_pan_no : editData ? editData.mfr_pan_no : '',
        mfr_contact_no : editData ? editData.mfr_contact_no : '',
        mfr_email_id : editData ? editData.mfr_email_id : '',
        mfr_contact_person : editData ? editData.mfr_contact_person : '',
        mfr_brands : editData ? editData.mfr_brands : ''
 
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
            mfr_id: editid,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            is_standard: 0, 
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            dispatch(editDeleteManufracturers(roleData));
        } else {
            dispatch(addManufracturers(roleData));
        }
    }

    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Manufacturers' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create ManufacturersAdd
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
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Name</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_name"
                                            value={(data.mfr_name)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Type</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_type"
                                            value={(data.mfr_type)}
                                        />
                                    </Grid>
                                   
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Address</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_address"
                                            value={(data.mfr_address)}
                                        />
                                    </Grid>
                                
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR City</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_city"
                                            value={(data.mfr_city)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Pincode</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_pincode"
                                            value={(data.mfr_pincode)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR State</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_state"
                                            value={(data.mfr_state)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Country</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_country"
                                            value={(data.mfr_country)}
                                        />
                                    </Grid>
                                    
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR GST No</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_gst_no"
                                            value={(data.mfr_gst_no)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR PAN No</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_pan_no"
                                            value={(data.mfr_pan_no)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Contact No</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_contact_no"
                                            value={(data.mfr_contact_no)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Email Id</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_email_id"
                                            value={(data.mfr_email_id)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Contact Person</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_contact_person"
                                            value={(data.mfr_contact_person)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Brands</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_brands"
                                            value={(data.mfr_brands)}
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
export default ManufacturersAdd;