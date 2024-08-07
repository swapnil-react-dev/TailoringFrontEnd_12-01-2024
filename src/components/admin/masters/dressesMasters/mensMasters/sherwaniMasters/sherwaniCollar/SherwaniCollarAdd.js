import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../../../reusableComponent/Breadcrumb";
import { Box, Button, Grid, MenuItem, Paper, Snackbar, Typography, Avatar, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Cancel } from "../../../../../../reusableComponent/BackBtn";
import { TLRinput, TLRinputNo } from "../../../../../../reusableComponent/ErpTextField";
import { useLocation, useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import styles from '../../../../../../../styles.module.css'
import { useForm } from "react-hook-form";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { useDispatch, useSelector } from "react-redux";
import { dateConversionOnEntryPage } from "../../../../../../reusableComponent/dateConversionOnEntryPage";
import { addSherwaniCollar, editDeleteSherwaniCollar, UploadSherwaniCollarImage } from "../../../../../../../actions/actions";

const SherwaniCollarAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;
    const editid = editData ? editData.sherwani_collar_id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    const sherwani_collar_image = useSelector(state => state.sherwani_collar.sherwani_collar_image)

    const [data, setData] = useState({
        sherwani_collar_name: editData ? editData.sherwani_collar_name : '',
        sherwani_collar_image: editData ? editData.sherwani_collar_image : '',
        sherwani_collar_charges: editData ? editData.sherwani_collar_charges : '',
    });

    const [is_standard, setIs_Standard] = useState(editData ? editData.is_standard : false)


    const handleChange = ({ target }) => {
        const value = target.value;
        setData({
            ...data,
            [target.name]: value,
        });
        data[target.name] = target.value;
    }

    const handleChangeIsStandard = (event) => {
        setIs_Standard(event.target.checked)
    }

    const uploadFile = async (event) => {
        try {
            const selectedFile = event.target.files[0];
            const formData = new FormData();
            formData.append('file', selectedFile);
            await dispatch(UploadSherwaniCollarImage(formData));
        } catch (error) {
            console.error('Error uploading file:', error); // Log the error for debugging
        }
    };

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
            sherwani_collar_id: editid,
            sherwani_collar_image: sherwani_collar_image == '' ? editData ? editData.sherwani_collar_image : sherwani_collar_image : sherwani_collar_image,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            is_standard: is_standard,
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            dispatch(editDeleteSherwaniCollar(roleData));
        } else {
            dispatch(addSherwaniCollar(roleData));
        }
        console.log("ffff", roleData)
    }
    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Sherwani Collar' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create Sherwani Collar Add
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
                                        <Typography className={`${styles.erp_lable}`}>Shewani Collar Design Name</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="sherwani_collar_name"
                                            value={(data.sherwani_collar_name)}
                                        />
                                    </Grid>
                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Shewani Collar Design Charges</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="sherwani_collar_charges"
                                            value={(data.sherwani_collar_charges)}
                                        />
                                    </Grid>
                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Shewani Collar Design Image</Typography>
                                    </Grid>

                                    <Grid item xs={4} sx={{ border: "1px solid black", borderRight: "none", height: "38%", marginLeft: "9px" }}>
                                        <TLRinput
                                            required
                                            variant="standard"
                                            size="small"
                                            fullWidth
                                            name="sherwani_collar_image"
                                            accept="image/*,application/pdf"
                                            type="file"
                                            onChange={uploadFile}
                                            InputProps={{
                                                disableUnderline: true,
                                            }}
                                            sx={{ marginTop: "22px" }}
                                        />
                                    </Grid>
                                    <Grid item xs={4} sx={{ border: "1px solid black", borderLeft: "none", height: "38%" }}>
                                        <Box
                                            sx={{
                                                border: "1px solid #333",
                                                maxWidth: 50,
                                                minWidth: 60,
                                                height: 50,
                                                padding: 1,
                                                margin: 0.5,
                                                borderRadius: 1,
                                                float: "right"
                                            }}
                                        >
                                            <Avatar
                                                variant="square"
                                                alt="Remy Sharp"
                                                // src={previewImage}
                                                sx={{ width: "100%", height: "100%" }}
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={3} className={`${styles.grid_lable}`} sx={{ marginTop: "10px" }}>
                                        <Typography className={`${styles.erp_lable}`}>Is Standard</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        color="primary"
                                                        size="small"
                                                        onChange={(e) => handleChangeIsStandard(e)}
                                                        name="is_standard"
                                                        value={is_standard}
                                                        defaultChecked={is_standard}
                                                    />
                                                }
                                            />
                                        </FormGroup>
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

export default SherwaniCollarAdd;