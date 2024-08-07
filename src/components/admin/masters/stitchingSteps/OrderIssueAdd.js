import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../reusableComponent/Breadcrumb";
import { Box, Button, Grid, MenuItem, Paper, Snackbar, Typography, Autocomplete, TableHead, TableContainer, Table, TableCell, TableRow, TableBody, IconButton, TextField } from "@mui/material";
import { Cancel } from "../../../reusableComponent/BackBtn";
import { TLRAutocomplete, TLRinput, TLRinputNo } from "../../../reusableComponent/ErpTextField";
import { useLocation, useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import styles from '../../../../styles.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dateConversionOnEntryPage } from "../../../reusableComponent/dateConversionOnEntryPage";
import { addOrderIssue, editDeleteOrderIssue, getFabricsList, getItemList } from "../../../../actions/actions"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { makeStyles } from '@mui/styles';
import dayjs from "dayjs";


const useStyles = makeStyles({
    option: {
        fontSize: 12,
    },
});

const OrderIssueAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;
    const classes = useStyles();
    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const orderInfo = urlLocation.state;
    const orderDetails = orderInfo && orderInfo;
    console.log("details", orderDetails);
    const editData = editInfo && editInfo;
    const editid = editData ? editData.issue_id : null;
    const fabricList = useSelector(state => state.fabrics.fabrics)
    const itemList = useSelector(state => state.item.item)

    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    const [issue_date, setIssue_date] = useState(dayjs(new Date()));
    const [fabric_id, setFabric_Id] = useState(null);

    const [data, setData] = useState({
        issue_no: editData ? editData.issue_no : '',
        // fabric_id: editData ? editData.fabric_id : '',
        fabric_code: editData ? editData.fabric_code : '',
        item_type: editData ? editData.item_type : '',
        item_id: editData ? editData.item_id : '',
        quantity: editData ? editData.quantity : '',
    });

    const handleChange = ({ target }) => {
        const value = target.value;
        setData({
            ...data,
            [target.name]: value,
        });
        data[target.name] = target.value;
    }

    const handleChangeIssueDate = (newValue) => {
        setIssue_date(newValue)
    }

    const handleChangeFabricId = (event, newValue) => {
        setFabric_Id(newValue)
        data['fabric_code'] = newValue ? newValue.fabric_code : ""
        // data['fabric_code'] = (data.item_type == 'Fabric' ? newValue.fabric_code : null)
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
        dispatch(getFabricsList())
        dispatch(getItemList())

        setFabric_Id({
            fabric_name : editData.fabric_name,
            fabric_id : editData.fabric_id
        })

    }, [])

    const onSubmit = (event) => {
        const roleData = {
            ...data,
            issue_id: editid,
            // fabric_id:  fabric_id ? fabric_id.fabric_id : null,
            fabric_id: (data.item_type == "Fabric" ? fabric_id ? fabric_id.fabric_id : null : null),
            order_id: editData.order_id,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            user_id: editData ? editData.user_id : userInfo.userId,
            // order_id : 1,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            issue_date: dateConversion(issue_date),
            changedUpdatedValue: 'edit',
        }
        // if (editData) { 
        if (orderDetails) { 
            dispatch(editDeleteOrderIssue(roleData));
        } else {
            dispatch(addOrderIssue(roleData));
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
                        { name: 'Order Issue' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create Order Issue Add
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
                                    {/* {editData &&
                                        <>
                                            <Grid item xs={2} className={`${styles.grid_lable}`}>
                                                <Typography className={`${styles.erp_lable}`}>Issue No</Typography>
                                            </Grid>
                                            <Grid item xs={4} className={`${styles.grid_input}`}>
                                                <TLRinputNo
                                                    required
                                                    size='small'
                                                    fullWidth
                                                    type="text"
                                                    onChange={handleChange}
                                                    name="issue_no"
                                                    value={(data.issue_no)}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    sx={{ backgroundColor: '#f2f2f2' }}
                                                />
                                            </Grid>
                                        </>
                                    } */} 
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Issue Date</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DesktopDatePicker
                                                slotProps={{ textField: { size: 'small', fullWidth: true } }}
                                                sx={{
                                                    "& .MuiInputBase-input": {
                                                        height: "9px",
                                                        fontSize: "12px",
                                                    }
                                                }}
                                                name="issue_date"
                                                inputFormat="DD/MM/YYYY"
                                                value={issue_date}
                                                onChange={handleChangeIssueDate}
                                                renderInput={(params) => <TLRinput {...params}
                                                    fullWidth
                                                />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>

                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Item Type</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            select
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="item_type"
                                            value={(data.item_type)}
                                        >
                                            <MenuItem className={`${styles.detailData}`} value="Fabric">Fabric</MenuItem>
                                            <MenuItem className={`${styles.detailData}`} value="Consumable">Consumable</MenuItem>

                                        </TLRinput>
                                    </Grid>
                                    {(data.item_type) == "Fabric" ? <>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Fabric</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <Autocomplete
                                             fullWidth
                                             classes={{
                                                option : classes.option,
                                             }}
                                             noOptionsText={
                                                <span className={classes.noOptionsText}>No record </span>
                                             }
                                            options={fabricList}
                                            value={fabric_id}
                                            onChange={handleChangeFabricId}
                                            getOptionLabel={(option) => option.fabric_name}
                                            getOptionSelected={(option, value) => option.fabric_id === value.fabric_id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params}  
                                            />}
                                            />

                                        {/* <TLRinput
                                            select
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="fabric_id"
                                            value={data.fabric_id}
                                        >
                                            {fabricList && fabricList.map((item) => (
                                                <MenuItem className={`${styles.menuItem}`} value={item.fabric_id}
                                                 defaultValue={editData.fabricName} 
                                                    >{item.fabric_name}</MenuItem>
                                            ))}
                                        </TLRinput> */}
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Fabric Code</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            // onChange={handleChange}
                                            name="fabric_code"
                                            value={(data.fabric_code)}
                                            // value={(data.item_type == "Fabric" ? (editData.fabric_code) : null)}
                                        />
                                    </Grid>
                                    </>
                                        : <> </>
                                    }
                                    {(data.item_type) == "Consumable" ? <>
                                        <Grid item xs={2} className={`${styles.grid_lable}`}>
                                            <Typography className={`${styles.erp_lable}`}>Item</Typography>
                                        </Grid>
                                        <Grid item xs={4} className={`${styles.grid_input}`}>
                                            {/* <Autocomplete
                                             fullWidth
                                             classes={{
                                                option : classes.option,
                                             }}
                                             noOptionsText={
                                                <span className={classes.noOptionsText}>No record </span>
                                             }
                                            options={itemList}
                                            // value={item_id}
                                            // onChange={handleChangeItemId}
                                            getOptionLabel={(option) => option.item_id}
                                            getOptionSelected={(option, value) => option.item_id === value.item_id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params} />}
                                            /> */}
                                            <TLRinput
                                                select
                                                required
                                                size='small'
                                                fullWidth
                                                type="text"
                                                onChange={handleChange}
                                                name="item_id"
                                                value={(data.item_id)}
                                            >
                                                {itemList && itemList.map((item ,index) => (
                                                    <MenuItem  className={`${styles.detailData}`}  value={item.item_id}>{item.item_code}</MenuItem>
                                                    
                                                ))}
                                            </TLRinput>
                                        </Grid> </>
                                        : <> </>
                                    }
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Quantity</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="quantity"
                                            value={(data.quantity)}
                                        />
                                    </Grid>

                                    <Grid item xs={12} className={`${styles.grid_input}`}>
                                        <Box sx={{ marginTop: '12px', float: 'right' }}>
                                            <Button color="primary" id={`${styles.btn_save}`} variant="contained" type="submit">
                                                {/* <SaveIcon style={{ fontSize: '16px', marginRight: '10px' }} />  {editData ? 'Save' : 'Update'} */}
                                                <SaveIcon style={{ fontSize: '16px', marginRight: '10px' }} />  {orderDetails ? 'Save' : 'Update'}
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

export default OrderIssueAdd;