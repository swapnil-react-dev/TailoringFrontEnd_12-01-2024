import React from 'react';
// import { Icon } from '@iconify/react';
import SimCardDownloadTwoToneIcon from '@mui/icons-material/SimCardDownloadTwoTone';
import { Button, Tooltip } from '@mui/material';
// import download_excel from '../../images/download_excel1.png'
import * as XLSX from 'xlsx';

const ExcelDownload = ({ data, fields, labels, filename }) => {

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  // const downloadExcel = () => {
  //   const formattedData = data.map((item) => {
  //     const rowData = {};
  //     fields.forEach((field, index) => {
  //       const fieldParts = field.split(' (');
  //       if (fieldParts.length > 1) {
  //         const mainField = fieldParts[0];
  //         const subField = fieldParts[1].substring(0, fieldParts[1].length - 1);
  //         rowData[labels[index]] = `${item[mainField]} (${item[subField]})`;
  //       } else {
  //         rowData[labels[index]] = item[field];
  //       }
  //     });
  //     return rowData;
  //   });

  //   const worksheet = XLSX.utils.json_to_sheet(formattedData);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
  //   XLSX.writeFile(workbook, `${filename}.xlsx`);
  // };

  const downloadExcel = () => {
    const formattedData = data.map((item) => {
      const rowData = {};
      fields.forEach((field, index) => {
        const fieldParts = field.split(' (');
        if (fieldParts.length > 1) {
          const mainField = fieldParts[0];
          const subField = fieldParts[1].substring(0, fieldParts[1].length - 1);
          rowData[labels[index]] = `${item[mainField]} (${item[subField]})`;
        } else {
          // Check if the field is a date and format it accordingly
          if (item[field] instanceof Date) {
            rowData[labels[index]] = formatDate(item[field]);
          } else {
            rowData[labels[index]] = item[field];
          }
        }
      });
      return rowData;
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  return (
    <Tooltip title="Download Excel File" >
      <SimCardDownloadTwoToneIcon onClick={downloadExcel}/>
      {/* <span onClick={downloadExcel}> <img src={download_excel} style={{ height: "20px", width: "20" }} />  </span> */}
      {/* <Icon icon="vscode-icons:file-type-excel2" onClick={downloadExcel} width="16" height="16" /> */}
    </Tooltip>
  );
};

export default ExcelDownload;
