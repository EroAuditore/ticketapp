import React, { Fragment, useState } from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Box,
  Fab,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import AddIcon from "@material-ui/icons/Add";
import FacturaCForm from "../FacturaCForm";
import SolicitudForm from "./SolicitudForm";
import FacturaTable from "./FacturaTable";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  paperModal: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },

  drawerContent: {
    width: 450,
    padding: 25,
  },
}));

const NuevaSolicitud = () => {
  const classes = useStyles();
  const onCrearMovimiento = () => {
    console.log("Creando movimeinto");
  };

  const [factura, setFactura] = useState({
    RFC: "",
    Cliente: "",
    empresaFacturadora: "",
    conceptoFactura: "",
    condicionPago: "",
    formaPago: "",
    montoTotal: "",
    usoCFDI: "",
    tipoComprobante: "",
    metodoPago: "",
    direccionCliente: "",
    email: "",
    generada: false,
  });

  const [solicitud, setSolicitud] = useState({});

  const handleOnChangeFacturaForm = (e) => {
    setFactura({
      ...factura,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeSolitudForm = (e) => {
    setSolicitud({
      ...solicitud,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (event) => {
    setFactura({ ...factura, [event.target.id]: event.target.checked });
  };

  const handleUpdate = () => {
    console.log("Handleupdate Start Update Factura", factura);
    /*dispatch(startEditFactura(factura));*/
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <h2>Solicitud de facturas</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <SolicitudForm
                data={solicitud}
                handleOnChange={handleOnChangeSolitudForm}
              />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Grid item xs={12}>
                <FacturaCForm
                  data={factura}
                  handleOnChange={handleOnChangeFacturaForm}
                  handleChecked={handleChecked}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<SaveAltIcon />}
                  onClick={onCrearMovimiento}
                >
                  Agregar
                </Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FacturaTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default NuevaSolicitud;
