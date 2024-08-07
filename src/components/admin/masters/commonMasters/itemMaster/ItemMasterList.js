import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, InputAdornment, Paper, Popover, Table, TableBody, TableContainer, TableHead, TablePagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TLRinput } from '../../../../reusableComponent/ErpTextField';
import { SearchOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../../../../reusableComponent/Breadcrumb";
import { StyledTableCell, StyledTableRow } from "../../../../reusableComponent/StyledTable";
import styles from '../../../../../styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { editDeleteItem, getItemList } from "../../../../../actions/actions";
import { dateConversionOnEntryPage } from "../../../../reusableComponent/dateConversionOnEntryPage";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ExcelDownload from "../../../../reusableComponent/ExcelDownload";
import DeleteSnackbar from "../../../../reusableComponent/DeleteSnackbar";
const ItemMasterList = () => {
    const dispatch = useDispatch();
    const [successMessage, setSuccessMessage] = useState(null);
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    const userInfo = userD.userInfo;

    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [page, setPage] = React.useState(0)
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const [q, setQ] = useState("");
    const [searchParam] = useState(["item_code", "item_category_name", "item_category_code" , "fabric_use_name", "fabric_use_code", "color_name","color_code", "item_grade_name","item_grade_code","quality","charges"]);

    const fields = ['id', "full_name", "email_id", "mobile_no", "user_name"];
    const labels = ['Id', "full_name", "email_id", "mobile_no", "user_name"];

    const [isDelete, setIsDelete] = useState(false);
    const [deleteInfo, setDeleteInfo] = useState();

    const rows = useSelector(state => state.item.item)

    const fetchData = () => {
        dispatch(getItemList())
    };

    useEffect(() => {
        fetchData()
    }, []);

    const [deleteMessage, setDeleteMessage] = useState(null);
    const [shouldShowMsg, setShouldShowMsg] = useState(false);
    const responseMessage = useSelector(state => state.user.message);

    useEffect(() => {
        if (responseMessage) {
            setShouldShowMsg(true);
        }
    }, [responseMessage, dispatch]);

    useEffect(() => {
        if (shouldShowMsg) {
            if (responseMessage !== null) {
                if (responseMessage === 'User already available!') {
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
        dispatch(editDeleteItem({ item_id: id, modifiedBy: userInfo.userId, modifiedAt: dateConversionOnEntryPage(new Date()), changedUpdatedValue: 'delete' }))
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
        // setOpen(false);
    };

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

    return ( 
        <>
         <Paper className={`${styles.main_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Masters', path: '/admin/dashboard' },
                        { name: 'Item List' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={2} sx={{ pt: 1.5, pb: 1.5 }}>
                        <Grid item md={7} sm={6} xs={12}>
                            <Box sx={{ display: 'flex' }}>
                                <Typography className="form-title" >
                                    Item List
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={5} sm={6} xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box className={`${styles.excel_box}`}>
                                <ExcelDownload
                                    data={rows}
                                    fields={fields}
                                    labels={labels}
                                    filename="Item List"
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

                            <NavLink to={{ pathname: `/admin/add-item` }}>
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
                                <StyledTableCell align="Left" className={`${styles.table_head}`} >Item Code</StyledTableCell>
                                <StyledTableCell align="right" className={`${styles.table_head}`} >Item Category</StyledTableCell>
                                <StyledTableCell align="left" className={`${styles.table_head}`} >Fabric</StyledTableCell>
                                <StyledTableCell align="left" className={`${styles.table_head}`} >Color</StyledTableCell>
                                <StyledTableCell align="left" className={`${styles.table_head}`} >Item Grade</StyledTableCell>
                                <StyledTableCell align="left" className={`${styles.table_head}`} >Quality</StyledTableCell>
                                <StyledTableCell align="left" className={`${styles.table_head}`} >Charges</StyledTableCell>
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
                                                                    <NavLink to={{ pathname: `/admin/add-item` }} state={row} className={`${styles.underline}`}>
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
                                        <StyledTableCell align="left"  className={`${styles.list_table_body}`}>{row.item_code}</StyledTableCell>
                                        <StyledTableCell align="right" className={`${styles.list_table_body}`}>{row.item_category_name} ({row.item_category_code})</StyledTableCell>
                                        <StyledTableCell align="left"  className={`${styles.list_table_body}`}>{row.fabric_use_name} ({row.fabric_use_code})</StyledTableCell>
                                        <StyledTableCell align="left"  className={`${styles.list_table_body}`}>{row.color_name} ({row.color_code}) </StyledTableCell>
                                        <StyledTableCell align="left"  className={`${styles.list_table_body}`}>{row.item_grade_name} ({row.item_grade_code})</StyledTableCell>
                                        <StyledTableCell align="left"  className={`${styles.list_table_body}`}>{row.quality}</StyledTableCell>
                                        <StyledTableCell align="left"  className={`${styles.list_table_body}`}>{row.charges}</StyledTableCell>
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
                        Do you really want to delete these records ?  # {deleteInfo && deleteInfo.item_code}
                    </DialogContent>
                    <DialogActions sx={{ padding: '10px', }}>
                        <Button onClick={handleClose} className={`${styles.dilog_delete_no_btn}`} variant='outlined'>
                            No
                        </Button>
                        <Button onClick={() => deleteRecord(deleteInfo.item_id)} className={`${styles.dilog_delete_yes_btn}`} variant='outlined'>
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
         </Paper>
        </>
     );
}
export default ItemMasterList;