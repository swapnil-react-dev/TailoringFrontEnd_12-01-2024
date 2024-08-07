
import { Button, Snackbar } from '@mui/material';
import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const DeleteSnackbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const actionMsg = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (<>

    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={1000}
      onClose={handleClose}
      action={actionMsg}
    />
  </>
  );
};
export default DeleteSnackbar;