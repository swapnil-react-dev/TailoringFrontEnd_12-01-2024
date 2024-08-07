import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../reusableComponent/Breadcrumb";
import { Box, Button, Grid, MenuItem, Autocomplete, Paper, Snackbar, Typography, Avatar, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Cancel } from "../../../../reusableComponent/BackBtn";
import { TLRinput, TLRinputNo } from "../../../../reusableComponent/ErpTextField";
import { useLocation, useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import styles from '../../../../../styles.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { dateConversionOnEntryPage } from "../../../../reusableComponent/dateConversionOnEntryPage";
import { addItem, editDeleteItem, getItemCategoryList, getFabricUseList, getColorList, getItemGradeList } from "../../../../../actions/actions";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    option: {
        fontSize: 12,
    },
});

const ItemMasterAdd = () => {
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;
    const classes = useStyles();
    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const urlLocation = useLocation();
    const editInfo = urlLocation.state;
    const editData = editInfo && editInfo;
    const editid = editData ? editData.item_id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    const [item , setItem] = useState("");
    const [item_category, setItem_Category] = useState(null);
    const [fabric_use, setFabric_Use] = useState(null);
    const [color, setColor] = useState(null);
    const [grade, setGrade] = useState(null);


    const itemCategoryList = useSelector(state => state.item_category.item_category)
    const fabricUseList = useSelector(state => state.fabric_use.fabric_use)
    const colorList = useSelector(state => state.color.color)
    const itemGradeList = useSelector(state => state.item_grade.item_grade)

    const [data, setData] = useState({
        item_code: editData ? editData.item_code  : '',
        quality: editData ? editData.quality : '',
        charges: editData ? editData.charges : ''
    });

    const handleChange = ({ target }) => {
        const value = target.value;
        setData({
            ...data,
            [target.name]: value,
        });
        data[target.name] = target.value;
    }

    const handleChangeItemCategory = (event, newValue) => {
        setItem_Category(newValue)
        // data['item_code'] = (newValue.item_category_code + fabric_use.fabric_use_code || " "  + color.color_code || " " +  grade.item_grade_code || " " )
        // data['item_code'] = (newValue.item_category_code + fabric_use.fabric_use_code ? fabric_use.fabric_use_code : null + color.color_code + grade.item_grade_code)
        setItem(newValue.item_category_code + fabric_use.fabric_use_code || null)
    }

    const handleChangeFabricUse = (event ,newValue) => {
      setFabric_Use(newValue)
    //   data['item_code'] = ( item_category.item_category_code + newValue.fabric_use_code + color.color_code + grade.item_grade_code )
    //   data['item_code'] = (item_category.item_category_code + newValue.fabric_use_code + color.color_code +  grade.item_grade_code)
    setItem( item_category.item_category_code  + newValue.fabric_use_code)
    }
    
    const handleChangeColor = (event , newValue) => {
        setColor(newValue)
        // data['item_code'] = (item_category.item_category_code + fabric_use.fabric_use_code + newValue.color_code + grade.item_grade_code )
        data['item_code'] = (item_category.item_category_code + fabric_use.fabric_use_code + newValue.color_code + grade.item_grade_code)
    }

    const handleChangeGrade = (event , newValue) => {
        setGrade(newValue)
        // data['item_code'] = (item_category.item_category_code + fabric_use.fabric_use_code + color.color_code + newValue.item_grade_code)
        data['item_code'] = (item_category.item_category_code + fabric_use.fabric_use_code + color.color_code + newValue.item_grade_code)
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
        dispatch(getItemCategoryList())
        dispatch(getFabricUseList())
        dispatch(getColorList())
        dispatch(getItemGradeList())

        if (editData) {
            setItem_Category({
                item_category_name: editData.item_category_name,
                item_category_code: editData.item_category_code,
                item_category_id: editData.item_category_id
            })
            setFabric_Use({
                fabric_use_name: editData.fabric_use_name,
                fabric_use_code: editData.fabric_use_code,
                fabric_use_id: editData.fabric_use_id
            })
            setColor({
                color_name: editData.color_name,
                color_code: editData.color_code,
                color_id: editData.color_id
            })
            setGrade({
                item_grade_name: editData.item_grade_name,
                item_grade_code: editData.item_grade_code,
                item_grade_id: editData.item_grade_id
            })
        }
    }, [])


    const onSubmit = (event) => {
        const roleData = {
            ...data,
            item_id: editid,
            item_category_id: item_category ? item_category.item_category_id : null,
            fabric_use_id: fabric_use ? fabric_use.fabric_use_id: null,
            color_id: color ? color.color_id : null,
            item_grade_id: grade ? grade.item_grade_id : null,
            createdBy: editData ? editData.createdBy : userInfo.userId,
            createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            modifiedBy: editData ? userInfo.userId : null,
            modifiedAt: dateConversionOnEntryPage(new Date()),
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            dispatch(editDeleteItem(roleData));
        } else {
            dispatch(addItem(roleData));
        }
        console.log("data", roleData)
    }
    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Item' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title">
                                    Create Item Add
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
                                        <Typography className={`${styles.erp_lable}`}>Item Code</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            // onChange={handleChange}
                                            // name="item_code"
                                            // value={(data.item_code)}
                                            value={item}
                                            inputProps={{
                                                readOnly : true
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Item Category</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <Autocomplete
                                            fullWidth
                                            classes={{
                                                option: classes.option,
                                            }}
                                            noOptionsText={
                                                <span className={classes.noOptionsText}>No record </span>
                                            }
                                            options={itemCategoryList}
                                            value={item_category}
                                            onChange={handleChangeItemCategory}
                                            getOptionLabel={(option) => option.item_category_name + " (" + option.item_category_code + ")"}
                                            getOptionSelected={(option, value) => option.item_category_id === value.item_category_id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params}
                                            />}
                                        />
                                    </Grid>

                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Fabric Use</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <Autocomplete
                                            fullWidth
                                            classes={{
                                                option: classes.option,
                                            }}
                                            noOptionsText={
                                                <span className={classes.noOptionsText}>No record </span>
                                            }
                                            options={fabricUseList}
                                            value={fabric_use}
                                            onChange={handleChangeFabricUse}
                                            getOptionLabel={(option) => option.fabric_use_name + " (" + option.fabric_use_code + ") "}
                                            getOptionSelected={(option, value) => option.fabric_use_id === value.fabric_use_id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params}
                                            />}
                                        />
                                    </Grid>

                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Color</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <Autocomplete
                                            fullWidth
                                            classes={{
                                                option: classes.option,
                                            }}
                                            noOptionsText={
                                                <span className={classes.noOptionsText}>No record </span>
                                            }
                                            options={colorList}
                                            value={color}
                                            onChange={handleChangeColor}
                                            getOptionLabel={(option) => option.color_name + " (" + option.color_code + ") "}
                                            getOptionSelected={(option, value) => option.color_id === value.color_id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params}
                                            />}
                                        />
                                    </Grid>
                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Item Grade</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <Autocomplete
                                            fullWidth
                                            classes={{
                                                option: classes.option,
                                            }}
                                            noOptionsText={
                                                <span className={classes.noOptionsText}>No record </span>
                                            }
                                            options={itemGradeList}
                                            value={grade}
                                            onChange={handleChangeGrade}
                                            getOptionLabel={(option) => option.item_grade_name + " (" + option.item_grade_code + ") " }
                                            getOptionSelected={(option, value) => option.item_grade_id === value.item_grade_id} // set value to option id
                                            renderInput={(params) => <TLRinput  {...params}
                                            />}
                                        />
                                    </Grid>
                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Quality</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <TLRinput
                                            select
                                            required
                                            size='small'
                                            fullWidth
                                            type="text"
                                            onChange={handleChange}
                                            name="quality"
                                            value={(data.quality)}
                                        >
                                            <MenuItem className={`${styles.detailData}`} value="Regular">Regular</MenuItem>
                                            <MenuItem className={`${styles.detailData}`} value="Premiun">Premiun</MenuItem>
                                        </TLRinput>
                                    </Grid>
                                    <Grid item xs={3} className={`${styles.grid_lable}`}>
                                        <Typography className={`${styles.erp_lable}`}>Charges</Typography>
                                    </Grid>
                                    <Grid item xs={9} className={`${styles.grid_input}`}>
                                        <TLRinputNo
                                            required
                                            size='small'
                                            fullWidth
                                            type="number"
                                            onChange={handleChange}
                                            name="charges"
                                            value={(data.charges)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} className={`${styles.grid_input}`}>
                                        <Box sx={{ marginTop: '12px', float: 'right' }}>
                                            <Button color="primary" id={`${styles.btn_save}`} variant="contained" type="submit">
                                                <SaveIcon style={{ fontSize: '16px', marginRight: '10px' }} />  {editData ? 'Update' : 'Save'}
                                            </Button>
                                            <Cancel/>
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
export default ItemMasterAdd;