import { Grid, Typography, Paper, Box,  TableCell, TableContainer,
    Table, TableHead, TableRow, TableBody, Accordion, AccordionDetails, AccordionSummary, DialogContent, } from '@mui/material';
import styles from '../../../../styles.module.css'
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { Icon } from '@iconify/react';
import { BootstrapDialog, BootstrapDialogTitle } from '../../../reusableComponent/BootstrapDialog';
import GrnAdd from './GrnAdd';
import { getGrnList } from '../../../../actions/actions';
import { useDispatch } from 'react-redux';

const GrnDetails = (props) => {
    const dispatch = useDispatch()
    const detailInfo = props.detailInfo;
    const [info, setInfo] = useState({});
    const [open, setOpen] = useState(false);
    const [openOption, setOpenOption] = useState('');

    const dateConversion = (date) => {
        var today = new Date(date);
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();
        const convDate = yyyy + "-" + mm + "-" + dd;
        return convDate;
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleEdit = grn => {
        setInfo(grn)
        setOpen(true)
        setOpenOption('Edit')
    }

    const fetchData = () => {
        dispatch(getGrnList())
    }

    useEffect(() => {
        fetchData()
    }, [])

    return ( 
        <>
         <Paper className='mainContainer' sx={{ boxShadow: 'none' }}>
                <Box>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item md={6}>
                            <Grid container spacing={2} sx={{ mt: 0 }}>
                                <Grid item md={3.6}>
                                    <Typography className={`${styles.list_table_body}`} sx={{ fontWeight: 'bold' }}>GRN No</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>GRN Date</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Mfr Id</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>GE No</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Bill No</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Bill Date</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Challan No</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Challan Date</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Lr No</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Transporter</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Grand Total</Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>Vehicle No</Typography>
                                

                                </Grid>
                                <Grid item md={0.6}>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>
                                    <Typography className={`${styles.list_table_body}`}  sx={{ fontWeight: 'bold' }}>: </Typography>

                                </Grid>
                                <Grid item md={7.8}>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.grn_no}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {dateConversion(detailInfo.grn_date)}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.mfr_id}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.GE_No}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.bill_no}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {dateConversion(detailInfo.bill_date)}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.challan_no}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {dateConversion(detailInfo.challan_date)}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.lr_no}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.transporter}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.grand_total}</Typography>
                                    <Typography className={`${styles.list_table_body}`}> {detailInfo.vehicle_no}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid item md={6}>
                            <Box >
                                <Grid container spacing={0} >
                                    <Grid item md={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <Box sx={{ marginBottom: '6px' }}>
                                            < Box sx={{ display: 'flex', justifyContent: 'right', }}>
                                                <EditIcon icon="carbon:edit" style={{ cursor: 'pointer', color: '#551A8B', float: 'right', fontSize: '19px' }} 
                                                onClick={() => handleEdit(detailInfo)} 
                                                />
                                            </Box>
                                            < Box>
                                                <Icon icon="clarity:email-line" width="19" height="19" color="red" style={{}} />
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid> */}
                    </Grid>
                    <Accordion sx={{ boxShadow: 'none' }} defaultExpanded>
                        <AccordionSummary sx={{ maxWidth: '250px', display: 'flex' }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ color: 'blue' }}>GRN Details</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper} sx={{ minHeight: 150, maxHeight: 200, }} className={`${styles.childTable}`}>
                                <Table sx={{minWidth:2500, maxWidth: 3000}} size='small'stickyHeader>
                                    <TableHead>
                                    <TableRow>
                                            <TableCell align="left" className={`${styles.tableBody}`}sx={{width:"2%"}}> Po No  </TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`}sx={{width:"5%"}}>Po Date</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} sx={{width:"5%"}}>Indent No</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`}sx={{width:"5%"}}>Indent Date</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`}sx={{width:"3%"}}>Item Type</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} sx={{width:"5%"}}>Item Id</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`}>Fabric Id</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`}  sx={{width:"4%"}}>Fabric Code</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Fabric Name</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} sx={{width:"3%"}}>category Id</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Category Name</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Color Id</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Color Name</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} sx={{width:"4%"}}>Purchase Unit</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Sell Unit</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Purchase Rate</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Sell Rate</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`}  sx={{width:"4%"}}>Challan Qty</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Received Qty</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Short Qty</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Express Qty</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Rejected Qty</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Accepted Qty</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Discount</TableCell>
                                            <TableCell align="left" className={`${styles.tableBody}`} >Total Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                       

                                       {JSON.parse(detailInfo.grn_details).map((details, index) => ( 
                                        <TableRow  >
                                            <TableCell sx={{ padding: '1px 3px 1px 3px', }} className='listTableBodyChild'>
                                        {details.po_no}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                              {dateConversion(details.po_date)}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.indent_no}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.indent_date}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.item_type}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.item_id}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                             {details.fabric_id}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.fabric_code}
                                            </TableCell>
                                           
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.fabric_name}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.category_id}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.category_name}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.color_id}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.color_name}
                                            </TableCell>

                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.purchase_unit}
                                            </TableCell>
                                       
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }}className='listTableBodyChild'>
                                            {details.sell_unit}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }}className='listTableBodyChild'>
                                            {details.purchase_rate}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }}className='listTableBodyChild'>
                                            {details.sell_rate}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.challan_qty}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.received_qty}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.short_qty}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.express_qty}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.rejected_qty}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.accepted_qty}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.discount}
                                            </TableCell>
                                            <TableCell sx={{ padding: '1px 3px 1px 3px' }} className='listTableBodyChild'>
                                            {details.total_amt}
                                            </TableCell>
                                        </TableRow>
                             ))  }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Paper>

         <BootstrapDialog 
         PaperProps={{
            sx: {
                maxWidth: "85%",
                maxHeight: "95%"
            }
        }}  
        onClose={handleClose}
        open={open}
         >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
                    {openOption === 'Edit' && 'Update GRN Details'}
            </BootstrapDialogTitle>
            <DialogContent>
                { (openOption === 'Edit') &&
                   <GrnAdd handleCloseDialog={handleClose} editInfo={info} onEdit={fetchData}/>

                }
            </DialogContent>

         </BootstrapDialog>

        </>
     );
}
 
export default GrnDetails;