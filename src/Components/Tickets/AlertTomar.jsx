import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AlertTomar = ({ alertState, handleClose, handleTake }) => {
  return (
    <React.Fragment>
      <Dialog
        open={alertState}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Tomar movimiento"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseas tomar el movimiento, una ves que que aceptes solamente tu
            usuario podra atenderlo?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleTake} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AlertTomar;
