import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../reusableComponent/Breadcrumb";
import { Autocomplete, Box, Button, Grid, MenuItem, Paper, Snackbar, Typography } from "@mui/material";
import { Cancel } from "../../../../reusableComponent/BackBtn";
import { TLRinput, TLRinputNo } from "../../../../reusableComponent/ErpTextField";
import { useLocation, useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import styles from '../../../../../styles.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dateConversionOnEntryPage } from "../../../../reusableComponent/dateConversionOnEntryPage";
import { addTailorShops, editDeleteTailorShops , getStitchingCentersList } from "../../../../../actions/actions"
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    option: {
        fontSize: 12,
    },
});

const TailorShopsAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;
    const classes = useStyles();
    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;
    const editid = editData ? editData.tailor_shop_id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    const stitchingList = useSelector(state => state.stitching_centers.stitching_centers)
    const [stitchingCenters, setStichingCenters] = useState(null);

    const [data, setData] = useState({
        tailor_shop_code: editData ? editData.tailor_shop_code : '',
        tailor_shop_name: editData ? editData.tailor_shop_name : '',
        tailor_shop_email_id: editData ? editData.tailor_shop_email_id : '',
        tailor_shop_address: editData ? editData.tailor_shop_address : '',
        tailor_shop_city: editData ? editData.tailor_shop_city : '',
        tailor_shop_pincode: editData ? editData.tailor_shop_pincode : '',
        // stitching_center_id: editData ? editData.stitching_center_id : ''

    });

    const handleChange = ({ target }) => {
        const value = target.value;
        setData({
            ...data,
            [target.name]: value,
        });
        data[target.name] = target.value;
    }

    const handleChangeStitching = (event, newValue) => {
        setStichingCenters(newValue)
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

    useEffect(() => {
     dispatch(getStitchingCentersList())
     if(editData) {
        setStichingCenters({
            stitching_center_name : editData.stitching_center_name,
            stitching_center_code : editData.stitching_center_code,
            stitching_center_id : editData.stitching_center_id
        })
     }
    },[])

    const onSubmit = (event) => {
        const roleData = {
            ...data,
            tailor_shop_id: editid,
            stitching_center_id : stitchingCenters ? stitchingCenters.stitching_center_id : null,
            // stitching_center_id : editData.stitching_center_id,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            dispatch(editDeleteTailorShops(roleData));
        } else {
            dispatch(addTailorShops(roleData));
        }
        console.log("roledata", roleData)
    }

    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Tailor Shops' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create Tailor Shops Add
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
                                        <Typography className={`${styles.erp_lable}`}>Tailor Shop Code</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="tailor_shop_code"
                                            value={(data.tailor_shop_code)}
                                        />
                                    </Grid>
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Tailor Shop Name</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="tailor_shop_name"
                                            value={(data.tailor_shop_name)}
                                        />
                                    </Grid>

                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Tailor Shop Email Id</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="tailor_shop_email_id"
                                            value={(data.tailor_shop_email_id)}
                                        />
                                    </Grid>

                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Tailor Shop Address</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="tailor_shop_address"
                                            value={(data.tailor_shop_address)}
                                        />
                                    </Grid>
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Tailor Shop City</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="tailor_shop_city"
                                            value={(data.tailor_shop_city)}
                                        />
                                    </Grid>
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Tailor Shop Pincode</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="tailor_shop_pincode"
                                            value={(data.tailor_shop_pincode)}
                                        />
                                    </Grid>
                                    <Grid item xs={2.2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Stitching Center Id</Typography>
                                    </Grid>
                                    <Grid item xs={3.8} className={`${styles.grid_input}`}>
                                        {/* <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="stitching_center_id"
                                            value={(data.stitching_center_id)}
                                        /> */}
                                        <Autocomplete
                                            fullWidth
                                            classes={{
                                                option: classes.option,
                                            }}
                                            noOptionsText={
                                                <span className={classes.noOptionsLabel}>No record</span>
                                            }
                                            options={stitchingList}
                                            value={stitchingCenters}
                                            onChange={handleChangeStitching}
                                            getOptionLabel={(option) => option.stitching_center_name + " (" + option.stitching_center_code + ")"}
                                            getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params} />}
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
export default TailorShopsAdd;