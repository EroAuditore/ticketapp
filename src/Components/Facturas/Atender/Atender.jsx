import React, { useState } from "react";

import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Drawer,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacturasTable from "./FacturasTable";
import FacturaCForm from "./../FacturaCForm";
import { useDispatch } from "react-redux";
import { startEditFactura } from "../../../Redux/Actions/facturas";

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

const Atender = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const hanldeClick = (item) => {
    setFactura({
      ...factura,
      _id: item._id,
      Cliente: item.Cliente,
      RFC: item.RFC,
      empresaFacturadora: item.empresaFacturadora,
      condicionPago: item.condicionPago,
      formaPago: item.formaPago,
      tipoComprobante: item.tipoComprobante,
      montoTotal: item.montoTotal,
      usoCFDI: item.usoCFDI,
      tipoComprobante: item.tipoComprobante,
      metodoPago: item.metodoPago,
      direccionCliente: item.direccionCliente,
      email: item.email,
      generada: item.generada,
    });
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

  const handleOnChangeFacturaForm = (e) => {
    setFactura({
      ...factura,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (event) => {
    setFactura({ ...factura, [event.target.id]: event.target.checked });
  };

  const handleUpdate = () => {
    console.log("Handleupdate Start Update Factura", factura);
    dispatch(startEditFactura(factura));
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <h2>Facturación</h2>
            </div>
          </Grid>
          <Grid item md={8}>
            <Paper>
              <FacturasTable onclick={(item) => hanldeClick(item)} />
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Datos de factura
                </Typography>

                <FacturaCForm
                  handleOnChange={handleOnChangeFacturaForm}
                  handleChecked={handleChecked}
                  data={factura}
                />
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={handleUpdate}>
                  Actualizar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Atender;
