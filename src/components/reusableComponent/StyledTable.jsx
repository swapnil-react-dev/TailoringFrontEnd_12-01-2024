import { TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableRow = styled(TableRow)(() => ({
    // '&:nth-of-type(even)': {
    //     backgroundColor: 'whitesmoke',
    // },
    '&:hover': {
        backgroundColor: 'whitesmoke',
    },
   
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        borderTop: '1px solid #A9A9A9 !important',
        borderBottom: '1px solid #A9A9A9 !important',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 12,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        padding:'2px 4px 2px 4px'
    },
}));

export const StyledTableCellPrint = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
      borderTop: '1px solid #616161 !important',
      borderBottom: '1px solid #616161 !important',
      fontSize: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    borderTop: '1px solid #616161',
    borderBottom: '1px solid #616161',
      fontSize: 10,
      padding:'2px 4px 2px 4px !important',
  },
}));


export const sortByTable = (rows, property, isAsc, isNumeric) => {
    const sortedData = rows.sort((a, b) => {
      if (isNumeric) {
        return isAsc ? a[property] - b[property] : b[property] - a[property];
      } else {
        return isAsc ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property]);
      }
    });
    return sortedData;
  };