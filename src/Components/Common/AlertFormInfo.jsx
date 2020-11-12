import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertFormInfo = ({
  title,
  alertState,
  handleClose,
  handleTake,
  children,
}) => {
  return (
    <React.Fragment>
      <Dialog
        open={alertState}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleTake} color="primary" variant="contained" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AlertFormInfo;
