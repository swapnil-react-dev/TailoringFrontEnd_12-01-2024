import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../reusableComponent/Breadcrumb";
import { Box, Button, Grid, MenuItem, Paper, Snackbar, Typography, Autocomplete, TableHead, TableContainer, Table, TableCell, TableRow, TableBody, IconButton } from "@mui/material";
import { Cancel } from "../../../../reusableComponent/BackBtn";
import { TLRinput, TLRinputNo } from "../../../../reusableComponent/ErpTextField";
import { useLocation, useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import styles from '../../../../../styles.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dateConversionOnEntryPage } from "../../../../reusableComponent/dateConversionOnEntryPage";
import { addFabrics, editDeleteFabrics, getFabricMaterialList, getColorList, getFabricUseList, getBrandList, getPatternList, getFabricQualityList } from "../../../../../actions/actions"
import { makeStyles } from '@mui/styles';
import { v4 as uuidv4 } from "uuid";
import { Icon } from '@iconify/react';


const useStyles = makeStyles({
    option: {
        fontSize: 12,
    },
});

const FabricsAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;
    const classes = useStyles();
    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;
    const editid = editData ? editData.fabric_id : null;
    const [isUpdateArray, setIsUpdateArray] = useState(false);
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    const [brand, setBrand] = useState(null)
    const [pattern , setPattern] = useState(null)
    const [fabricQuality, setFabricQuality] = useState(null);
    const fabricMaterialList = useSelector(state => state.fabric_material.fabric_material)
    const colorList = useSelector(state => state.color.color)
    const fabricUsedList = useSelector(state => state.fabric_use.fabric_use)
    const brandList = useSelector(state => state.brand.brand)
    const paternList = useSelector(state => state.pattern.pattern)
    const fabricQualityList = useSelector(state => state.fabric_quality.fabric_quality)

    const [data, setData] = useState({
        fabric_code: editData ? editData.fabric_code : '',
        fabric_name: editData ? editData.fabric_name : '',
        brand_id: editData ? editData.brand_id : '',
        pattern_id: editData ? editData.pattern_id : '',
        fabric_quality_id: editData ? editData.fabric_quality_id : '',
        // compositions: editData ? editData.compositions : '',
        gsm: editData ? editData.gsm : '',
        thickness: editData ? editData.thickness : '',
        colors: editData ? editData.colors : '',
        color_accuracy: editData ? editData.color_accuracy : '',
        fabric_feel_id: editData ? editData.fabric_feel_id : '',
        weight: editData ? editData.weight : '',
        epi: editData ? editData.epi : '',
        ppi: editData ? editData.ppi : '',
        width: editData ? editData.width : '',
        category: editData ? editData.category : '',
        fabric_use: editData ? editData.fabric_use : '',
        occasion_id: editData ? editData.occasion_id : '',
        mfr_id: editData ? editData.mfr_id : '',
        purchase_unit: editData ? editData.purchase_unit : '',
        sell_unit: editData ? editData.sell_unit : '',
        moq: editData ? editData.moq : '',
        made_in: editData ? editData.made_in : '',


    });

    const [compositionFields, setCompositionFields] = useState(
        editData ? editData.compositions:
            [{
                fabric_material_id : '',
                fabric_material_name: '',
                percent: '',

            }]
    )

    const [colorFields , setColorFields] = useState(
        editData ? editData.colors : 
        [{
            color_id : '',
            color_name : '',
            color_code : ''
        }]
    )

    const [fabricUseFields , setFabricUseFields] = useState (
        editData ? editData.fabricUseDetails : 
        [{
            fabric_use_id : '',
            fabric_use_name : ''
        }]
    )
    const handleChange = ({ target }) => {
        const value = target.value;
        setData({
            ...data,
            [target.name]: value,
        });
        data[target.name] = target.value;
    }

    const handleChangeBrand = (event , newValue) => {
        setBrand(newValue)
    }
    
    const handleChangePattern = (event , newValue) => {
        setPattern(newValue)
    }
    
    const handleChangeFabricQuality = (event, newValue) => {
        setFabricQuality(newValue)
    }

    const handleChangeFabricMaterial = (index) => (event, newValue) => {
        const updatedInputFields = compositionFields.map((row, ind) => {

            if (ind === index) {
                return {
                    ...row,
                    fabricId: newValue.fabric_material_id,
                    fabric_material_name: newValue ? newValue.fabric_material_name : '',
                    fabric_material_id : newValue ? newValue.fabric_material_id : ''
                };
            }
            return row;
        });
        setCompositionFields(updatedInputFields);
        setIsUpdateArray(!isUpdateArray);
    }

    const handleChangeColors = (index) => (event, newValue) => {
        const updatedInputFields = colorFields.map((row, ind) => {

            if (ind === index) {
                return {
                    ...row,
                    colorId: newValue.color_id ,//id
                    color_name: newValue ? newValue.color_name : '',
                    color_code: newValue ? newValue.color_code : '',
                    color_id : newValue ? newValue.color_id : ''
                };
            }
            return row;
        });
        setColorFields(updatedInputFields);
        setIsUpdateArray(!isUpdateArray);
    }
    
    const handleChangeFabricUse = (index) => (event, newValue) => {
        const updatedInputFields = fabricUseFields.map((row, ind) => {

            if (ind === index) {
                return {
                    ...row,
                    fabricUseId: newValue.fabric_use_id,
                    fabric_use_name: newValue ? newValue.fabric_use_name : '',
                    fabric_use_id : newValue ? newValue.fabric_use_id : ''
                };
            }
            return row;
        });
        setFabricUseFields(updatedInputFields);
        setIsUpdateArray(!isUpdateArray);
    }


    const handleCompositionInput = (e, i) => {
        const array = compositionFields;
        let result = array[i];
        result[e.target.name] = e.target.value.toUpperCase();
        array[i] = result;
        setCompositionFields(array);
        setIsUpdateArray(isUpdateArray ? false : true)

    }

    // const handleColorInput = (e, i) => {
    //     const array = colorFields;
    //     let result = array[i];
    //     result[e.target.name] = e.target.value.toUpperCase();
    //     array[i] = result;
    //     setColorFields(array);

    // }

    // const handleFabricUseInput = (e,i) => {
    //     const array = fabricUseFields;
    //     let result = array[i];
    //     result[e.target.name] = e.target.value.toUpperCase();
    //     array[i] = result;
    //     setFabricUseFields(array)
    // }

    
    const handleAddCompositionFields = () => {
        setCompositionFields([
            ...compositionFields,
            {
                fabric_material_id : '',
                fabric_material_name: '',
                percent: '',
            }
           
        ])
    }

    const handleAddColorFields = () => {
        setColorFields([
            ...colorFields,
            {
             color_id : '',
             color_name : '',
             color_code : ''
            }
        ])
    }

    const handleAddFabricUseFields = () => {
        setFabricUseFields([
            ...fabricUseFields,
            {
                fabric_use_id : '',
                fabric_use_name : ''
            }
        ])
    }

    // const handleRemoveFields = (id) => {
    //     const values = [...inputFields];
    //     values.splice(
    //         values.findIndex((value) => value.id === id),
    //         1
    //     );
    //     setInputFields(values);
    //     setIsUpdateArray(isUpdateArray ? false : true);

    // };
    const handleRemoveCompositionFields = (id) => {
        const values = [...compositionFields];
        values.splice(
                    values.findIndex((value) => value.id === id),
                    1
                );
        setCompositionFields(values)
    }

    const handleRemoveColorFields = (id) => {
        const values = [...colorFields];
        values.splice(
            values.findIndex((value) => value.id === id),
            1
        );
        setColorFields(values)
    }

    const handleRemoveFabricUseFields = (id) => {
        const values = [...fabricUseFields];
        values.splice(
            values.findIndex((value) => value.id === id),
            1
        );
        setFabricUseFields(values)

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
        dispatch(getFabricMaterialList())
        dispatch(getColorList())
        dispatch(getFabricUseList())
        dispatch(getBrandList())
        dispatch(getPatternList())
        dispatch(getFabricQualityList())
    }, [])

    const onSubmit = (event) => {
        const roleData = {
            ...data,
            brand_id : brand ? brand.brand_id : null, 
            pattern_id : pattern ? pattern.pattern_id : null,
            fabric_quality_id : fabricQuality ? fabricQuality.fabric_quality_id : null,
            compositions : compositionFields,
            colors : colorFields,
            fabric_use : fabricUseFields,
            fabric_id: editid,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            is_standard: 0,
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            dispatch(editDeleteFabrics(roleData));
        } else {
            dispatch(addFabrics(roleData));
        }
        console.log("roledata", roleData)
    }

    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Fabrics' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create FabricsAdd
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
                                        <Typography className={`${styles.erp_lable}`}>Fabric Code</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="fabric_code"
                                            value={(data.fabric_code)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Fabric Name</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="fabric_name"
                                            value={(data.fabric_name)}
                                        />
                                    </Grid>

                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Brand Id</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        {/* <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="brand_id"
                                            value={(data.brand_id)}
                                        /> */}
                                         <Autocomplete
                                            fullWidth
                                            classes={{
                                                option: classes.option,
                                            }}
                                            noOptionsText={
                                                <span className={classes.noOptionsLabel}>No record</span>
                                            }
                                            options={brandList}
                                            value={brand}
                                            onChange={handleChangeBrand}
                                            getOptionLabel={(option) => option.brand_name}
                                            getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params} />}
                                        />
                                    </Grid>

                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Pattern Id</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        {/* <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="pattern_id"
                                            value={(data.pattern_id)}
                                        /> */} 
                                         <Autocomplete
                                            fullWidth
                                            classes={{
                                                option: classes.option,
                                            }}
                                            noOptionsText={
                                                <span className={classes.noOptionsLabel}>No record</span>
                                            }
                                            options={paternList}
                                            value={pattern}
                                            onChange={handleChangePattern}
                                            getOptionLabel={(option) => option.pattern_name}
                                            getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params} />}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Fabric Quality Id</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        {/* <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="fabric_quality_id"
                                            value={(data.fabric_quality_id)}
                                        /> */}
                                         <Autocomplete
                                            fullWidth
                                            classes={{
                                                option: classes.option,
                                            }}
                                            noOptionsText={
                                                <span className={classes.noOptionsLabel}>No record</span>
                                            }
                                            options={fabricQualityList}
                                            value={fabricQuality}
                                            onChange={handleChangeFabricQuality}
                                            getOptionLabel={(option) => option.fabric_quality_name}
                                            getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params} />}
                                        />

                                    </Grid>

                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>GSM</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="gsm"
                                            value={(data.gsm)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Thickness</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="thickness"
                                            value={(data.thickness)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Colors</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="colors"
                                            value={(data.colors)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Color Accuracy</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="color_accuracy"
                                            value={(data.color_accuracy)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Fabric Feel Id</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="fabric_feel_id"
                                            value={(data.fabric_feel_id)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Weight</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="weight"
                                            value={(data.weight)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>EPI</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="epi"
                                            value={(data.epi)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>PPI</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="ppi"
                                            value={(data.ppi)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Width</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="width"
                                            value={(data.width)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Category</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="category"
                                            value={(data.category)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Fabric Use</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="fabric_use"
                                            value={(data.fabric_use)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Occasion Id</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="occasion_id"
                                            value={(data.occasion_id)}
                                        />
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
                                        <Typography className={`${styles.erp_lable}`}>Purchase Unit</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="purchase_unit"
                                            value={(data.purchase_unit)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Sell Unit</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="sell_unit"
                                            value={(data.sell_unit)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Moq</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="moq"
                                            value={(data.moq)}
                                        />
                                    </Grid>
                                    <Grid item xs={2} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Made In</Typography>
                                    </Grid>
                                    <Grid item xs={4} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="made_in"
                                            value={(data.made_in)}
                                        />
                                    </Grid>
                                    <br />
                                    <br />
                                    {/* ARRAY OF OBJECT */}
                                    <Grid item xs={6}>
                                        <TableContainer sx={{ overflowY: 'auto', minHeight: 140, maxHeight: 220 }} className={`${styles.childTable}`} >
                                            <Table sx={{ minWidth: 500, maxWidth: 1400 }} size='small'>
                                                <TableHead >
                                                    <TableRow>
                                                        <TableCell align="left" className={`${styles.tableBody}`} >Fabric Material Name</TableCell>
                                                        <TableCell align="left" className={`${styles.tableBody}`}>Percent %</TableCell>
                                                        <TableCell align="center" className={`${styles.tableBody}`} >Actions</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {compositionFields && compositionFields.map((row, index) => (
                                                        // station &&
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
                                                                    options={fabricMaterialList}
                                                                    value={row.fabricId}
                                                                    onChange={handleChangeFabricMaterial(index)}
                                                                    getOptionLabel={(option) => option.fabric_material_name}
                                                                    getOptionSelected={(option, value) => option.id === value.id} // set value to option id
                                                                    renderInput={(params) => <TLRinput  {...params} />}
                                                                />
                                                            </TableCell>
                                                            <TableCell align='left'>
                                                                <TLRinputNo
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    required
                                                                    type="number"
                                                                    name="percent"
                                                                    value={row.percent}
                                                                    size='small'
                                                                    onChange={(e) => handleCompositionInput(e, index)}
                                                                />
                                                            </TableCell>

                                                            <TableCell align="right" >
                                                                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                                                    <IconButton size="small" sx={{ fontSize: '12px', color: "blue" }} onClick={handleAddCompositionFields}>
                                                                        <Icon icon="line-md:plus" />
                                                                    </IconButton>
                                                                    {index === 0 ?
                                                                        <IconButton disabled size="small" style={{ fontSize: '12px', color: 'red' }} >
                                                                            <Icon icon={'line-md:remove'} />
                                                                        </IconButton> :
                                                                        <IconButton size="small" onClick={() => handleRemoveCompositionFields(row.id)} style={{ fontSize: '12px', color: 'red' }}>
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

                                    <Grid item xs={6}>
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
                                    </Grid>

                                    <Grid item xs={6}>
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
                                                        // station &&
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
                                                                        </IconButton>}

                                                                </Box>
                                                            </TableCell>

                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>

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
    )
}
export default FabricsAdd;