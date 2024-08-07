
import React, { useEffect, useState } from "react";
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, InputAdornment, Paper, Popover, Table, TableBody, TableContainer, TableHead, TablePagination, Typography } from "@mui/material";

import styles from '../../../../../styles.module.css'
import Breadcrumb from "../../../../reusableComponent/Breadcrumb";
import ExcelDownload from "../../../../reusableComponent/ExcelDownload";
import { useDispatch, useSelector } from "react-redux";
import { TLRinput, TLRinputNo } from "../../../../reusableComponent/ErpTextField";
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { editDeleteManufracturers, getManufracturersList } from "../../../../../actions/actions";
import { dateConversionOnEntryPage } from "../../../../reusableComponent/dateConversionOnEntryPage";
import { SearchOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from "../../../../reusableComponent/StyledTable";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { BootstrapDialog, BootstrapDialogTitle } from "../../../../reusableComponent/BootstrapDialog";
import DeleteSnackbar from "../../../../reusableComponent/DeleteSnackbar";
import ManufacturersDetails from "./ManufacturersDetails";
// import FabricsDetails from "./FabricsDetails";

const ManufacturersList = () => {
    const dispatch = useDispatch();
    const [successMessage, setSuccessMessage] = useState(null);
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;

    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [page, setPage] = React.useState(0)
    const [info, setInfo] = useState({});
    const [openOption, setOpenOption] = useState('');
    const [open, setOpen] = useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const [q, setQ] = useState("");
    const [searchParam] = useState(["mfr_name", "mfr_type", "mfr_address", "mfr_city", "mfr_pincode", "mfr_state", "mfr_country", "mfr_gst_no", "mfr_pan_no", "mfr_contact_no", "mfr_email_id", "mfr_contact_person", "mfr_brands"]);

    const fields = ['id', "shirt_fitting_style",];
    const labels = ['Id', "shirt_fitting_style",];

    const [isDelete, setIsDelete] = useState(false);
    const [deleteInfo, setDeleteInfo] = useState();

    const rows = useSelector(state => state.manufracturers.manufracturers)

    const fetchData = () => {
        dispatch(getManufracturersList())
    };
    useEffect(() => {
        fetchData()
    }, []);

    const [deleteMessage, setDeleteMessage] = useState(null);
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
                if (responseMessage === 'Role already available!') {
                    setSuccessMessage(responseMessage)
                    setShouldShowMsg(false);
                    dispatch({ type: 'RESET_MESSAGE' });
                } else {
                    setSuccessMessage(responseMessage);
                    setShouldShowMsg(false);
                    dispatch({ type: 'RESET_MESSAGE' });
                    fetchData();
                    setIsDelete(false);
                }
            }
        }
    }, [shouldShowMsg, responseMessage, fetchData]);

    const deleteRecord = (id) => {
        dispatch(editDeleteManufracturers({ mfr_id: id, modifiedBy: userInfo.userId, modifiedAt: dateConversionOnEntryPage(new Date()), changedUpdatedValue: 'delete' }))
        setIsDelete(false);
        fetchData()
    }

    const handleDelete = (functions) => {
        setIsDelete(true);
        setDeleteInfo(functions);
        // setOpen(false);
    }

    const handleClose = (event, reason) => {
        setIsDelete(false)
        setDeleteInfo(null);
        setOpen(false);
    };

    const handleDetails = (id) => {
        setInfo(id)
        setOpen(true);
        setOpenOption('Details')
    }



    function search() {
        return rows && rows.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem] && item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }
    const [sortBy, setSortBy] = useState(null);
    const handleSort = (property) => {
        const isAsc = sortBy === property && sortBy !== null;
        setSortBy(isAsc ? property + '_desc' : property);
        rows.sort((a, b) => {
            if (typeof a[property] === 'number' && typeof b[property] === 'number') {
                return isAsc ? a[property] - b[property] : b[property] - a[property];
            } else {
                return isAsc ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property]);
            }
        });
    };
    return (
        <>
            <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Masters', path: '/admin/dashboard' },
                        { name: 'Manufacturers List' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title" >
                                    Manufacturers List
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box className={`${styles.excel_box}`}>
                                <ExcelDownload
                                    data={rows}
                                    fields={fields}
                                    labels={labels}
                                    filename="User List"
                                />
                            </Box>
                            <TLRinput
                                fullWidth
                                type="search"
                                name="search"
                                placeholder="Search"
                                value={q}
                                size="small"
                                onChange={(e) => setQ(e.target.value)}
                                sx={{
                                    "& .MuiInputBase-root": {
                                        paddingLeft: '1px',
                                    }
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" >
                                            <IconButton sx={{ padding: '4px' }}>
                                                <SearchOutlined sx={{ fontSize: '22px', marginRight: '4px' }} />
                                                <Divider orientation="vertical" flexItem />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <NavLink to={{ pathname: `/admin/add-manufacturers` }}>
                                <Button variant="outlined" className={`${styles.add_btn}`}>
                                    <AddIcon viewBox="3 3 18 18" className={`${styles.add_icon}`} />
                                </Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
                <TableContainer component={Paper} className={`${styles.list_tbl_container}`}>
                    <Table size="small" stickyHeader>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center" className={`${styles.table_head}`}>Action</StyledTableCell>
                                <StyledTableCell align="Left" className={`${styles.table_head}`} >MFR Name</StyledTableCell>
                                <StyledTableCell align="Left" className={`${styles.table_head}`} >MFR Type</StyledTableCell>
                                <StyledTableCell align="Left" className={`${styles.table_head}`} >MFR Address</StyledTableCell>
                                <StyledTableCell align="Left" className={`${styles.table_head}`} >MFR City</StyledTableCell>


                                {/* <StyledTableCell align="left" className={`${styles.table_head}`} onClick={() => handleSort('ifscCode')}>IFSC Code <span className={`${styles.sort_icon}`}> {sortBy === 'ifscCode' ? '▲' : '▼'} </span></StyledTableCell> */}
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {rows && search(rows)
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => (
                                    <StyledTableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                        <StyledTableCell align="center" >
                                            <PopupState variant="popover" popupId="demo-popup-popover">
                                                {(popupState) => (
                                                    <div>
                                                        <MoreHorizIcon
                                                            id={styles.actionBtn}
                                                            alt="translator"
                                                            variant="contained"
                                                            {...bindTrigger(popupState)}
                                                        />
                                                        <Popover
                                                            {...bindPopover(popupState)}
                                                            anchorOrigin={{
                                                                vertical: "right",
                                                                horizontal: "center"
                                                            }}
                                                            transformOrigin={{
                                                                vertical: "right",
                                                                horizontal: "center"
                                                            }}
                                                        >
                                                            <Container className={`${styles.tbl_action}`}>
                                                                <>
                                                                    <NavLink to={{ pathname: `/admin/add-manufacturers` }} state={row} className={`${styles.underline}`}>
                                                                        <Button className={`${styles.list_tbl_action_btn}`}>
                                                                            <EditIcon style={{ float: 'left', fontSize: '20px', cursor: 'pointer' }} />
                                                                            <span style={{ marginRight: '13px' }}> Edit Record</span> </Button> </NavLink>
                                                                    <Button className={`${styles.list_tbl_action_btn}`} onClick={() => { handleDelete(row); popupState.close() }}>
                                                                        <DeleteForeverOutlinedIcon /> Delete Record</Button>
                                                                </>
                                                            </Container>
                                                        </Popover>
                                                    </div>
                                                )}
                                            </PopupState>
                                        </StyledTableCell>
                                        <StyledTableCell align="left" className={`${styles.list_table_body}`}>{row.mfr_name}</StyledTableCell>
                                        <StyledTableCell align="left" className={`${styles.list_table_body}`} sx={{ color: 'blue', cursor: "pointer" }} onClick={() => handleDetails(row)}>
                                            {row.mfr_type}
                                        </StyledTableCell>
                                        <StyledTableCell align="left" className={`${styles.list_table_body}`}>{row.mfr_address}</StyledTableCell>
                                        <StyledTableCell align="left" className={`${styles.list_table_body}`}>{row.mfr_city}</StyledTableCell>

                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    sx={{ px: 2 }}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Dialog open={isDelete}
                    PaperProps={{
                        sx: {
                            minWidth: "30%",
                            minHeight: "20%",
                            borderRadius: '8px'
                        }
                    }}>
                    <DialogTitle className={`${styles.dilog_delete_title}`}>

                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                right: 0,
                                top: 0,
                                float: 'right'
                            }} >
                            <CloseIcon style={{ height: '18px', color: '#000000' }} />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent className={`${styles.dilog_delete_content}`}>
                        <HighlightOffOutlinedIcon sx={{ fontSize: '90px', color: '#ff3c36', fontWeight: 400 }} />
                        <Typography sx={{ fontSize: '37px', }}>  Are You Sure ? </Typography>
                        Do you really want to delete these records ?  # {deleteInfo && deleteInfo.mfr_name}
                    </DialogContent>
                    <DialogActions sx={{ padding: '10px', }}>
                        <Button onClick={handleClose} className={`${styles.dilog_delete_no_btn}`} variant='outlined'>
                            No
                        </Button>
                        <Button onClick={() => deleteRecord(deleteInfo.mfr_id)} className={`${styles.dilog_delete_yes_btn}`} variant='outlined'>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
                {deleteMessage &&
                    <DeleteSnackbar
                        open={deleteMessage ? true : false}
                        message={deleteMessage}
                    />
                }
                <BootstrapDialog
                    PaperProps={{
                        sx: {
                            minWidth: openOption === 'Details' ? "60%" : "60%",
                            maxHeight: "90%"
                        }
                    }}
                    // onClose={handleClose}
                    open={open}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {openOption === 'Details' ? 'View Manufacturers Details' : ``}
                    </BootstrapDialogTitle>
                    <DialogContent dividers >
                        {openOption === 'Details' &&
                            <ManufacturersDetails detailInfo={info} />
                        }
                    </DialogContent>
                </BootstrapDialog>
            </Paper>
        </>
    );
}

export default ManufacturersList;