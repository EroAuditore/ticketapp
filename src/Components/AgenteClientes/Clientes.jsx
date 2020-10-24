import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import CreateIcon from "@material-ui/icons/Create";
import ClientesTbl from "./ClientesTbl";
import TableContainer from "@material-ui/core/TableContainer";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { startClientes } from "../../Redux/Actions/agenteCliente";
import {
  startNC,
  startAC,
  startAgentes,
} from "./../../Redux/Actions/agenteCliente";
import { agentesSelector, clientesSelector } from "../../Redux/Selectors";
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

const Clientes = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [cliente, setCliente] = useState({
    _id: uuidv4(),
    Nombre: "",
    RFC: "",
    direccion: "",
    email: "",
    idAgente: "",
    Agente: "",
  });
  const agentesList = useSelector((state) => agentesSelector(state));

  const handleClose = () => {
    setOpen(false);
  };

  const handleGuardar = () => {
    dispatch(startNC(cliente));
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(startAC());
    dispatch(startAgentes());
  }, []);

  useEffect(() => {
    if (agentesList !== undefined && agentesList.length > 0) {
      console.log("agentes list:", agentesList);
      setCliente({ ...cliente, idAgente: agentesList[0]._id });
    }
  }, [agentesList]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.paperTitle}>
            <h2>Clientes</h2>
          </div>
        </Grid>
        {/*<Grid item xs>
          <CustomTextBox
            onClick={handleFilterClick}
            onChange={handleFiltertextChange}
          />le
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
        <Grid item xs={9}>
          <TableContainer component={Paper}>
            <ClientesTbl />
          </TableContainer>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">Cliente</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <FormControl fullWidth size="small">
                <InputLabel id="tipo">Agente</InputLabel>
                <Select
                  labelId="Agente"
                  id="Agente"
                  name="idAgente"
                  onChange={handleChange}
                  fullWidth
                  value={cliente.idAgente}
                >
                  {agentesList.map((row) => (
                    <MenuItem key={row._id} value={row._id}>
                      {row.Agente}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="Nombre"
                label="Nombre"
                name="Nombre"
                value={cliente.Nombre}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="RFC"
                name="RFC"
                label="RFC"
                value={cliente.RFC}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="direccion"
                label="Dirección"
                name="direccion"
                value={cliente.direccion}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="E-mail"
                name="email"
                value={cliente.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
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

export default Clientes;
