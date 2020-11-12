import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

const DialogBox = (props) => {
  const { dialogState, handleClose, handleOk, children, title } = props;
  return (
    <Dialog
      open={dialogState}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleOk} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogBox.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.any.isRequired,
  handleOk: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
};

export default DialogBox;
