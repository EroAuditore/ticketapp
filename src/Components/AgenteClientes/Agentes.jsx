import React, { useState, useEffect } from "react";
import { Container, Grid, Button, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import CreateIcon from "@material-ui/icons/Create";
import AgentesTbl from "./AgentesTbl";
import TableContainer from "@material-ui/core/TableContainer";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { startAgentes } from "../../Redux/Actions/agenteCliente";
import { startNA } from "./../../Redux/Actions/agenteCliente";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  drawerContent: {
    width: 450,
    padding: 25,
  },
  paperContent: {
    padding: 30,
  },
}));

const Agentes = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [agente, setAgente] = useState({
    _id: uuidv4(),
    Agente: "",
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleGuardar = () => {
    dispatch(startNA(agente));
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setAgente({
      ...agente,
      Agente: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(startAgentes());
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.paperTitle}>
            <h2>Agentes</h2>
          </div>
        </Grid>
        {/*<Grid item xs>
          <CustomTextBox
            onClick={handleFilterClick}
            onChange={handleFiltertextChange}
          />
        </Grid>*/}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CreateIcon />}
            onClick={handleAdd}
          >
            Nuevo
          </Button>
        </Grid>
        <Grid item xs={7}>
          <TableContainer component={Paper}>
            <AgentesTbl />
          </TableContainer>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agente</DialogTitle>
        <DialogContent>
          <DialogContentText>Nuevo Agente</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Nombre"
            label="Nombre"
            value={agente.Agente}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleGuardar} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Agentes;
