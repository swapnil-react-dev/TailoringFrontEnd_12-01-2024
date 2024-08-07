import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../../../reusableComponent/Breadcrumb";
import { Box, Button, Grid, MenuItem, Paper, Snackbar, Typography } from "@mui/material";
import { Cancel } from "../../../../../../reusableComponent/BackBtn";
import { TLRinput, TLRinputNo } from "../../../../../../reusableComponent/ErpTextField";
import { useLocation, useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import styles from '../../../../../../../styles.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dateConversionOnEntryPage } from "../../../../../../reusableComponent/dateConversionOnEntryPage";
import { addShirtFitting,editDeleteShirtFitting } from "../../../../../../../actions/actions";


const ShirtFittingMasterAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;
    const editid = editData ? editData.role_id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);

    const [data, setData] = useState({
        shirt_fitting_style : editData ? editData.shirt_fitting_style : '',
 
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
            shirt_fitting_id: editid,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            is_standard: 0, 
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            dispatch(editDeleteShirtFitting(roleData));
        } else {
            dispatch(addShirtFitting(roleData));
        }
    }

    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Shirt Fitting' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create ShirtFittingMasterAdd
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <Grid container spacing={2} style={{ minHeight: '350px', paddingLeft: '50px' }}>
                            <Grid item xs={4} >
                                <Typography > Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </Typography>
                            </Grid>
                            <Grid item xs={2} > </Grid>
                            <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <Grid container spacing={1} sx={{ mt: 0 }}>
                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Shirt Fitting Style</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="shirt_fitting_style"
                                            value={(data.shirt_fitting_style)}
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
export default ShirtFittingMasterAdd;