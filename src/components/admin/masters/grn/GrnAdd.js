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
import { addGrn, editDeleteGrn, getFabricsList } from "../../../../actions/actions"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


import { makeStyles } from '@mui/styles';
import { v4 as uuidv4 } from "uuid";
import { Icon } from '@iconify/react';
import dayjs from "dayjs";

const useStyles = makeStyles({
    option: {
        fontSize: 12,
    },
});

const GrnAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;
    const classes = useStyles();
    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;

    const editid = editData ? editData.grn_id : null;
    let navigate = useNavigate();
    const fabricList = useSelector(state => state.fabrics.fabrics)
    console.log("fabrics", fabricList)
    const [successMessage, setSuccessMessage] = useState(null);

    const [grn_date, setGrn_date] = useState(dayjs(new Date()))
    const [bill_date, setBill_date] = useState(dayjs(new Date()))
    // const [bill_date, setBill_date] = useState(dayjs(new Date()))
    const [challan_date, setChallan_date] = useState(dayjs(new Date()))
    const [fabric_id, setFabric_Id] = useState(null)

    const [isUpdateArray, setIsUpdateArray] = useState(false);

    const [data, setData] = useState({
        grn_no: editData ? editData.grn_no : '',
        mfr_id: editData ? editData.mfr_id : '',
        GE_No: editData ? editData.GE_No : '',
        bill_no: editData ? editData.bill_no : '',
        challan_no: editData ? editData.challan_no : '',
        lr_no: editData ? editData.lr_no : '',
        transporter: editData ? editData.transporter : '',
        grand_total: editData ? editData.grand_total : '',
        vehicle_no: editData ? editData.vehicle_no : '',
    });

    const handleChange = ({ target }) => {
        const value = target.value;
        setData({
            ...data,
            [target.name]: value,
        });
        data[target.name] = target.value;
    }



    const handleChangeGrnDate = (newValue) => {
        setGrn_date(newValue);
    };

    const handleChangeBillDate = (newValue) => {
        setBill_date(newValue)
    }

    const handleChangeChallanDate = (newValue) => {
        setChallan_date(newValue)
    }

    const handleChangeItemDescription = (index) => (event, newValue) => {
        const updatedInputFields = inputFields.map((row, ind) => {
            if (ind === index) {
                return {
                    ...row,
                    fabricId: newValue,
                    fabric_code: newValue ? newValue.fabric_code : '',
                    fabric_name: newValue ? newValue.fabric_name : '',
                }
            }
            return row
        });
        setInputFields(updatedInputFields);
        setIsUpdateArray(!isUpdateArray)
    }

    const [inputFields, setInputFields] = useState(
        // editData ? editData.grn_details :
        editData ? JSON.parse(editData.grn_details) :

            [{
                id: uuidv4(),
                po_no: '',
                po_date: '',
                indent_no: '',
                indent_date: '',
                item_type: '',
                item_id: '',
                fabric_id: '',
                fabric_code: '',
                fabric_name: '',
                category_id: '',
                category_name: '',
                color_id: '',
                color_name: '',
                purchase_unit: '',
                sell_unit: '',
                purchase_rate: '',
                sell_rate: '',
                challan_qty: '',
                received_qty: '',
                short_qty: '',
                express_qty: '',
                rejected_qty: '',
                accepted_qty: '',
                discount: '',
                total_amt: ''
            }]
    )

    const handleMultipleInput = (e, i) => {
        const array = inputFields;
        let result = array[i];
        result[e.target.name] = e.target.value;
        array[i] = result;
        setInputFields(array);
        setIsUpdateArray(isUpdateArray ? false : true);
    }

    const handleAddFields = () => {
        setInputFields([
            ...inputFields,
            {
                id: uuidv4(),
                po_no: '',
                po_date: '',
                indent_no: '',
                indent_date: '',
                item_type: '',
                item_id: '',
                fabric_id: '',
                fabric_code: '',
                fabric_name: '',
                category_id: '',
                category_name: '',
                color_id: '',
                color_name: '',
                purchase_unit: '',
                sell_unit: '',
                purchase_rate: '',
                sell_rate: '',
                challan_qty: '',
                received_qty: '',
                short_qty: '',
                express_qty: '',
                rejected_qty: '',
                accepted_qty: '',
                discount: '',
                total_amt: ''
            }
        ])
    }
    const handleRemoveFields = (id) => {
        const values = [...inputFields];
        values.splice(
            values.findIndex((value) => value.id === id),
            1
        );
        setInputFields(values)
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
            grn_details: JSON.stringify(inputFields),
            grn_id: editid,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            grn_date: dateConversion(grn_date),
            bill_date: dateConversion(bill_date),
            challan_date: dateConversion(challan_date),
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            dispatch(editDeleteGrn(roleData));
        } else {
            dispatch(addGrn(roleData));
        }
        console.log("data", roleData)
    }

    useEffect(() => {
        dispatch(getFabricsList())
    }, [])

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
                        { name: 'Grn' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create GRN Add
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
                                    {editData &&
                                        <>
                                            <Grid item xs={2} className={`${styles.grid_lable}`}>
                                                <Typography className={`${styles.erp_lable}`}>Grn No</Typography>
                                            </Grid>
                                            <Grid item xs={4} className={`${styles.grid_input}`}>
                                                <TLRinputNo
                                                    required
                                                    size='small'
                                                    fullWidth
                                                    type="text"
                                                    onChange={handleChange}
                                                    name="grn_no"
                                                    value={(data.grn_no)}
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                    sx={{ backgroundColor: '#f2f2f2' }}
                                                />
                                            </Grid>
                                        </>
                                    }
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>GRN Date</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DesktopDatePicker
                                                slotProps={{ textField: { size: 'small' , fullWidth: true }  }}
                                                sx={{
                                                    "& .MuiInputBase-input": {
                                                        height: "9px",
                                                        fontSize: "12px",
                                                    }
                                                }}
                                                name="grn_date"
                                                inputFormat="DD/MM/YYYY"
                                                value={grn_date}
                                                onChange={handleChangeGrnDate}
                                                renderInput={(params) => <TLRinput {...params}
                                                fullWidth
                                                />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>MFR Id</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="mfr_id"
                                            value={(data.mfr_id)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>GE No</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="GE_No"
                                            value={(data.GE_No)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Bill No</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="bill_no"
                                            value={(data.bill_no)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Bill Date</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`} >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DesktopDatePicker
                                                slotProps={{ textField: { size: 'small' , fullWidth: true} }}
                                                sx={{
                                                    "& .MuiInputBase-input": {
                                                        height: "9px",
                                                        fontSize: "12px"
                                                    }
                                                }}
                                                name="bill_date"
                                                inputFormat="DD/MM/YYYY"
                                                value={bill_date}
                                                onChange={handleChangeBillDate}
                                                renderInput={(params) => <TLRinput {...params}
                                                    name="bill_date"
                                                    fullWidth />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Challan No</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="challan_no"
                                            value={(data.challan_no)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Challan Date</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                                            <DesktopDatePicker
                                                slotProps={{ textField: { size: 'small' , fullWidth: true } }}
                                                sx={{
                                                    "& .MuiInputBase-input": {
                                                        height: "9px",
                                                        fontSize: "12px"
                                                    }
                                                }}
                                                name="challan_date"
                                                inputFormat="DD/MM/YYYY"
                                                value={challan_date}
                                                onChange={handleChangeChallanDate}
                                                renderInput={(params) => <TLRinput {...params}
                                                    fullWidth />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Lr No</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="lr_no"
                                            value={(data.lr_no)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Transporter</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="transporter"
                                            value={(data.transporter)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Grand Total</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="grand_total"
                                            value={(data.grand_total)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Vehicle No</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="vehicle_no"
                                            value={(data.vehicle_no)}
                                        />
                                    </Grid>
                                    <br />
                                    <br />
                                    {/* ARRAY OF OBJECT */}
                                    <Grid item xs={12}>
                                        <TableContainer sx={{ overflowY: 'auto', minHeight: 140, maxHeight: 220 }} className={`${styles.childTable}`} >
                                            <Table sx={{ minWidth: 3000, maxWidth: 4000 }} size='small' aria-label="spanning table" stickyHeader>
                                                <TableHead >
                                                    <TableRow>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }} >Po No</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "3%" }}>Po Date</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Indent No</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "3%" }}>Indent Date</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }} >Item Type</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Item Id</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Fabric Id</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Fabric Code</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Fabric Name</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Category Id</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Category Name</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Color Id</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Color Name</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Purchase Unit</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Sell Unit</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Purchase Rate</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Sell Rate</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Challan qty</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Received qty</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Short qty</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Express qty</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Rejected qty</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Accepted qty</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Discount</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`} sx={{ width: "2%" }}>Total Amt</TableCell>
                                                        <TableCell align="center" className={`${styles.tableBody}`} sx={{ width: "1%" }}>Actions</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {inputFields && inputFields.map((row, index) => (
                                                        <TableRow key={row.id}>
                                                            <TableCell className={`${styles.childTblBody}`}>
                                                                <TLRinputNo
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="po_no"
                                                                    value={row.po_no}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="left" className={`${styles.childTblBody}`} >
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DesktopDatePicker
                                                                        slotProps={{ textField: { size: 'small' } }}
                                                                        sx={{
                                                                            "& .MuiInputBase-input": {
                                                                                height: "9px",
                                                                                fontSize: "12px"
                                                                            }
                                                                        }}
                                                                        name="po_date"
                                                                        inputFormat="DD/MM/YYYY"
                                                                        value={row.po_date}
                                                                        // onChange={handleChangeChallanDate}
                                                                        renderInput={(params) => <TLRinput {...params}
                                                                            fullWidth />}
                                                                    />
                                                                </LocalizationProvider>
                                                            </TableCell>

                                                            <TableCell  className={`${styles.childTblBody}`}>
                                                                <TLRinputNo
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="indent_no"
                                                                    value={row.indent_no}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                                    <DesktopDatePicker
                                                                        slotProps={{ textField: { size: 'small' } }}
                                                                        sx={{
                                                                            "& .MuiInputBase-input": {
                                                                                height: "9px",
                                                                                fontSize: "12px"
                                                                            }
                                                                        }}
                                                                        name="indent_date"
                                                                        inputFormat="DD/MM/YYYY"
                                                                        value={row.indent_date}
                                                                        onChange={handleChangeChallanDate}
                                                                        renderInput={(params) => <TLRinput {...params}
                                                                        />}
                                                                    />
                                                                </LocalizationProvider>
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                {/* <Autocomplete
                                                                    fullWidth
                                                                    classes={{
                                                                        option: classes.option,
                                                                    }}
                                                                    noOptionsText={
                                                                        <span className={classes.noOptionsLabel}>No record</span>
                                                                    }
                                                                    options={fabricList}
                                                                    value={fabric_id}
                                                                    // onChange={handleChangeFabricId}

                                                                    // getOptionLabel={(option) => option.party_name + " (" + option.city + ")"}
                                                                    // getOptionSelected={(option, value) => option._id === value._id} // set value to option id
                                                                    renderInput={(params) => <TLRinput  {...params} />}
                                                                /> */}

                                                                 <TLRinput align='left'
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="item_type"
                                                                    value={row.item_type}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                /> 
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="item_id"
                                                                    value={row.item_id}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <Autocomplete
                                                                    fullWidth
                                                                    classes={{
                                                                        option: classes.option,
                                                                    }}
                                                                    noOptionsText={
                                                                        <span className={classes.noOptionsLabel}>No record</span>
                                                                    }
                                                                    options={fabricList}
                                                                    value={fabric_id}
                                                                    onChange={handleChangeItemDescription(index)}
                                                                    getOptionLabel={(option) => option.fabric_id}
                                                                    getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                                                    renderInput={(params) => <TLRinput  {...params} />}
                                                                />

                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="fabric_code"
                                                                    value={row.fabric_code}
                                                                    size='small'
                                                                onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="fabric_name"
                                                                    value={row.fabric_name}
                                                                    size='small'
                                                                onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="category_id"
                                                                    value={row.category_id}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="category_name"
                                                                    value={row.category_name}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>
                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="color_id"
                                                                    value={row.color_id}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>
                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="color_name"
                                                                    value={row.color_name}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="purchase_unit"
                                                                    value={row.purchase_unit}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="sell_unit"
                                                                    value={row.sell_unit}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="purchase_rate"
                                                                    value={row.purchase_rate}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="sell_rate"
                                                                    value={row.sell_rate}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="challan_qty"
                                                                    value={row.challan_qty}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="received_qty"
                                                                    value={row.received_qty}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="short_qty"
                                                                    value={row.short_qty}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="express_qty"
                                                                    value={row.express_qty}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="rejected_qty"
                                                                    value={row.rejected_qty}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="accepted_qty"
                                                                    value={row.accepted_qty}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="discount"
                                                                    value={row.discount}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell className={`${styles.childTblBody}`} >
                                                                <TLRinput
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="total_amt"
                                                                    value={row.total_amt}
                                                                    size='small'
                                                                    onChange={(e) => handleMultipleInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell align="right" >
                                                                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                                                    <IconButton size="small" sx={{ fontSize: '12px', color: "blue" }} onClick={handleAddFields}>
                                                                        <Icon icon="line-md:plus" />
                                                                    </IconButton>
                                                                    {index === 0 ?
                                                                        <IconButton disabled size="small" style={{ fontSize: '12px', color: 'red' }} >
                                                                            <Icon icon={'line-md:remove'} />
                                                                        </IconButton> :
                                                                        <IconButton size="small" onClick={() => handleRemoveFields(row.id)} style={{ fontSize: '12px', color: 'red' }}>
                                                                            <Icon icon={'line-md:remove'} />
                                                                        </IconButton>
                                                                    }
                                                                </Box>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}

                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>

                                    {/* <Grid item xs={6}>
                                        <TableContainer sx={{ overflowY: 'auto', minHeight: 140, maxHeight: 220 }} className={`${styles.childTable}`} >
                                            <Table sx={{ minWidth: 500, maxWidth: 1400 }} size='small'>
                                                <TableHead >
                                                    <TableRow>

                                                        <TableCell align="left" className={`${styles.tableBody}`} style={{ width: "14%" }}>Colors</TableCell>
                                                        <TableCell align="center" className={`${styles.tableBody}`} style={{ width: "14%" }}>Color Code</TableCell>
                                                        <TableCell align="center" className={`${styles.tableBody}`} style={{ width: "10%" }}>Actions</TableCell>

                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {colorFields && colorFields.map((row, index) => (
                                                        <TableRow key={row.color_id}>
                                                            <TableCell align="left">

                                                                <Autocomplete
                                                                    fullWidth
                                                                    classes={{
                                                                        option: classes.option,
                                                                    }}
                                                                    noOptionsText={
                                                                        <span className={classes.noOptionsLabel}>No record</span>
                                                                    }
                                                                    options={colorList}
                                                                    value={row.colorId}
                                                                    onChange={handleChangeColors(index)}
                                                                    getOptionLabel={(option) => option.color_name}
                                                                    getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                                                    renderInput={(params) => <TLRinput  {...params} />}
                                                                />
                                                            </TableCell>
                                                            <TableCell align='center'>
                                                                <TLRinputNo
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="text"
                                                                    name="color_code"
                                                                    value={row.color_code}
                                                                    size='small'
                                                                    // onChange={(e) => handleColorInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell align="right" >
                                                                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                                                    <IconButton size="small" sx={{ fontSize: '12px', color: "blue" }} onClick={handleAddColorFields}>
                                                                        <Icon icon="line-md:plus" />
                                                                    </IconButton>
                                                                    {index === 0 ?
                                                                        <IconButton disabled size="small" style={{ fontSize: '12px', color: 'red' }} >
                                                                            <Icon icon={'line-md:remove'} />
                                                                        </IconButton> :
                                                                        <IconButton size="small" onClick={() => handleRemoveColorFields(row.id)} style={{ fontSize: '12px', color: 'red' }}>
                                                                            <Icon icon={'line-md:remove'} />
                                                                        </IconButton>
                                                                    }
                                                                </Box>
                                                            </TableCell>

                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid> */}

                                    {/* <Grid item xs={6}>
                                        <TableContainer sx={{ overflowY: 'auto', minHeight: 140, maxHeight: 220 }} className={`${styles.childTable}`} >
                                            <Table sx={{ minWidth: 500, maxWidth: 1400 }} size='small'>
                                                <TableHead >
                                                    <TableRow>

                                                        <TableCell align="center" className={`${styles.tableBody}`} style={{ width: "14%" }}>Fabric Use Name</TableCell>
                                                        <TableCell align="center" className={`${styles.tableBody}`} style={{ width: "10%" }}>Actions</TableCell>

                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {fabricUseFields && fabricUseFields.map((row, index) => (
                                    
                                                        <TableRow key={row.itemId}>
                                                            <TableCell align="left">
                                                                <Autocomplete
                                                                    fullWidth
                                                                    classes={{
                                                                        option: classes.option,
                                                                    }}
                                                                    noOptionsText={
                                                                        <span className={classes.noOptionsLabel}>No record</span>
                                                                    }
                                                                    options={fabricUsedList}
                                                                    value={row.fabricUseId}
                                                                    onChange={handleChangeFabricUse(index)}
                                                                    getOptionLabel={(option) => option.fabric_use_name}
                                                                    getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                                                    renderInput={(params) => <TLRinput  {...params} />}
                                                                />
                                                            </TableCell>


                                                            <TableCell align="right" >
                                                                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                                                    <IconButton
                                                                        size="small" sx={{ fontSize: '12px', color: 'blue' }} onClick={handleAddFabricUseFields}>
                                                                        <Icon icon="line-md:plus" />
                                                                    </IconButton>
                                                                    {index === 0 ?
                                                                        <IconButton disabled size="small" style={{ fontSize: '12px', color: 'red' }} >
                                                                            <Icon icon={'line-md:remove'} />
                                                                        </IconButton> :
                                                                        <IconButton size="small" onClick={() => handleRemoveFabricUseFields(row.id)} sx={{ fontSize: '12px', color: 'red' }}>
                                                                            <Icon icon={'line-md:remove'} />
                                                                        </IconButton>
                                                                        }

                                                                </Box>
                                                            </TableCell>

                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid> */}

                                    {/* <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Compositions</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <Autocomplete
                                            fullWidth
                                            classes={{
                                                option: classes.option,
                                            }}
                                            noOptionsText={
                                                <span className={classes.noOptionsLabel}>No record</span>
                                            }
                                            options={fabricMaterialList}
                                            value={fabricMaterial}
                                            onChange={handleChangeCompositions}
                                             getOptionLabel={(option) => option.fabric_material_name}
                                            getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params} />}
                                        />
                                    </Grid> */}

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

export default GrnAdd;