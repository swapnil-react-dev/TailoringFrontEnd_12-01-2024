import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../../../reusableComponent/Breadcrumb";
import { Box, Button, Grid, MenuItem, Paper, Snackbar, Typography, Avatar, TextField } from "@mui/material";
import { Cancel } from "../../../../../../reusableComponent/BackBtn";
import { TLRinput, TLRinputNo } from "../../../../../../reusableComponent/ErpTextField";
import { useLocation, useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import styles from '../../../../../../../styles.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dateConversionOnEntryPage } from "../../../../../../reusableComponent/dateConversionOnEntryPage";
import { addShirtBackPleat, editDeleteShirtBackPleat, UploadShirtBackPleatImage } from "../../../../../../../actions/actions";


const ShirtBackPleatAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;
    const editid = editData ? editData.shirt_backpleat_id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    

    const [data, setData] = useState({
        shirt_backpleat_name: editData ? editData.shirt_backpleat_name : '',
        // shirt_backpleat_image: editData ? editData.shirt_backpleat_image : '',
        shirt_backpleat_charges: editData ? editData.shirt_backpleat_charges : ''
    });
    const shirt_backpleat_image = useSelector(state => state.shirt_backpleat.shirt_backpleat_image); 
    const [previewImage, setPreviewImage] = useState("");

    // const handleFileUpload = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    
    //     reader.addEventListener(
    //       "load",
    //       function() {
    //         setPreviewImage(reader.result);
    //       },
    //       false
    //     );
    //     if (file) {
    //       reader.readAsDataURL(file);
    //       setData ({...data,  imageShirtBackPleat: file});
    //     }
    //   };

      const uploadFile = async (event) => {
        try {
            const selectedFile = event.target.files[0];
            const formData = new FormData();
            formData.append('file', selectedFile);
            await dispatch(UploadShirtBackPleatImage(formData));
            const reader = new FileReader();
            reader.addEventListener(
                "load",
                function() {
                  setPreviewImage(reader.result);
                },
                false
              );
              if (selectedFile) {
                reader.readAsDataURL(selectedFile);
                setPreviewImage ({...previewImage,  shirt_backpleat_image: selectedFile});
              }
        } catch (error) {
            console.error('Error uploading file:', error); // Log the error for debugging
        }
      }
    
    
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
                    setPreviewImage(shirt_backpleat_image)

                } else {
                    setShouldShowMsg(true);
                    navigate(-1, { responseMessage });
                }
            }
        }
    }, [shouldShowMsg, responseMessage, previewImage]);
    const onSubmit = (event) => {
        const roleData = {
            ...data,
            shirt_backpleat_id: editid,
            shirt_backpleat_image: shirt_backpleat_image == '' ? editData ? editData.shirt_backpleat_image : shirt_backpleat_image : shirt_backpleat_image,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            is_standard: 0,
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            dispatch(editDeleteShirtBackPleat(roleData));
        } else {
            dispatch(addShirtBackPleat(roleData));
        }
    }

    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Shirt Back Pleat' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create ShirtBackPleatAdd
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
                                        <Typography className={`${styles.erp_lable}`}>Shirt Black Pleat Name</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="shirt_backpleat_name"
                                            value={(data.shirt_backpleat_name)}
                                        />
                                    </Grid>

                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Shirt Black Pleat Charges</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="shirt_backpleat_charges"
                                            value={(data.shirt_backpleat_charges)}
                                        />
                                    </Grid>

                                    {/* image textfield  */}
                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Shirt Black Pleat Image</Typography>
                                    </Grid>
                                    <Grid item xs={4}  sx={{ border: "1px solid black", borderRight: "none", height: "38%" , marginLeft:"9px" }}>
                                        <TLRinput
                                            required
                                            variant="standard"
                                            size="small"
                                            fullWidth
                                            name="shirt_backpleat_image"
                                            accept="image/*,application/pdf"
                                            type="file"
                                            onChange={uploadFile}
                                            InputProps={{
                                                disableUnderline: true,
                                             }}
                                             sx={{marginTop:"22px"}}
                                        />
                                    </Grid>
                                    <Grid item xs={4} sx={{ border: "1px solid black", borderLeft: "none", height: "38%"}}>
                                        <Box
                                            sx={{
                                                border: "1px solid #333",
                                                maxWidth: 50,
                                                minWidth: 60,
                                                height: 50,
                                                padding: 1,
                                                margin: 0.5,
                                                borderRadius : 1,
                                                float : "right"
                                            }}
                                        >
                                            <Avatar
                                                variant="square"
                                                alt="Remy Sharp"
                                                src={previewImage}
                                                sx={{ width: "100%", height: "100%" }}
                                            />
                                        </Box>
                                    </Grid>
                                    {/* image textfield  */}
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
export default ShirtBackPleatAdd;