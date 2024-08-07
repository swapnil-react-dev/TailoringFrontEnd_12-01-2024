import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../reusableComponent/Breadcrumb";
import { Box, Button, Grid, MenuItem, Paper, Snackbar, Typography, Autocomplete, TableHead, TableContainer, Table, TableCell, TableRow, TableBody, IconButton, TextField } from "@mui/material";
import { Cancel } from "../../../../reusableComponent/BackBtn";
import { TLRAutocomplete, TLRinput, TLRinputNo } from "../../../../reusableComponent/ErpTextField";
import { useLocation, useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import styles from '../../../../../styles.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dateConversionOnEntryPage } from "../../../../reusableComponent/dateConversionOnEntryPage";
import { addStandardMeasurementsUpperBody, editDeleteStandardMeasurementsUpperBody } from "../../../../../actions/actions"
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    option: {
        fontSize: 12,
    },
});

const StandardMeasurementsUpperBodyAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;
    const classes = useStyles();
    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;
    const editid = editData ? editData.standard_ub_measurement_id : null;

    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);

    const [data, setData] = useState({
        gender: editData ? editData.gender : '',
        standard_ub_measure_in_unit: editData ? editData.standard_ub_measure_in_unit : '',
        standard_ub_size: editData ? editData.standard_ub_size : '',
        standard_ub_neck: editData ? editData.standard_ub_neck : '',
        standard_ub_chest: editData ? editData.standard_ub_chest : '',
        standard_ub_waist: editData ? editData.standard_ub_waist : '',
        standard_ub_seat: editData ? editData.standard_ub_seat : '',
        standard_ub_sleeve_length: editData ? editData.standard_ub_sleeve_length : '',
        standard_ub_biceps: editData ? editData.standard_ub_biceps : '',
        standard_ub_shoulder: editData ? editData.standard_ub_shoulder : '',
        standard_ub_cuff: editData ? editData.standard_ub_cuff : '',
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
            standard_ub_measurement_id: editid,
            // createdBy: editData ? editData.createdBy : userInfo.userId,
            createdBy: 1,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            changedUpdatedValue: 'edit',
        }
        if (editData) { 
            dispatch(editDeleteStandardMeasurementsUpperBody(roleData));
        } else {
            dispatch(addStandardMeasurementsUpperBody(roleData));
        }
        console.log("data", roleData)
    }

    const dateConversion = (date) => {
        var today = new Date(date);
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();
        const convDate = yyyy + "-" + mm + "-" + dd + 'T00:00:00.000+00:00';
        return convDate;
    };
    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Standard Measurement UpperBody' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create Standard Measurement UB Add
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
                                        <Typography className={`${styles.erp_lable}`}>Gender</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            select
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="gender"
                                            value={(data.gender)}
                                        >
                                            <MenuItem className={`${styles.detailData}`} value="Male">Male</MenuItem>
                                            <MenuItem className={`${styles.detailData}`} value="Female">Female</MenuItem>

                                        </TLRinput>
                                    </Grid>

                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Measure Unit</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            select
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="standard_ub_measure_in_unit"
                                            value={(data.standard_ub_measure_in_unit)}
                                        >
                                            <MenuItem className={`${styles.detailData}`} value="CM">CM</MenuItem>
                                            <MenuItem className={`${styles.detailData}`} value="INCH">INCH</MenuItem>

                                        </TLRinput>

                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Standard Size</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="standard_ub_size"
                                            value={(data.standard_ub_size)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Neck</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="standard_ub_neck"
                                            value={(data.standard_ub_neck)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Chest</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="standard_ub_chest"
                                            value={(data.standard_ub_chest)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Waist</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="standard_ub_waist"
                                            value={(data.standard_ub_waist)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Seat</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="standard_ub_seat"
                                            value={(data.standard_ub_seat)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Sleeve Length</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="standard_ub_sleeve_length"
                                            value={(data.standard_ub_sleeve_length)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Biceps</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="standard_ub_biceps"
                                            value={(data.standard_ub_biceps)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Shoulder</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="standard_ub_shoulder"
                                            value={(data.standard_ub_shoulder)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Cuff</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="standard_ub_cuff"
                                            value={(data.standard_ub_cuff)}
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
    );
}

export default StandardMeasurementsUpperBodyAdd;