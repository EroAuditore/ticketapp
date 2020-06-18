import React from "react";

import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import NumberFormatCustom from "./../Common/NumberFormatCustom";

import ListaTipoComprobante from "./../Common/ListaTipoComprobante";
import ListaUsoCFDI from "./../Common/ListaUsoCFDI";
import ListaCondicionesPago from "../Common/ListaCondicionesPago";

import ListaFormaPago from "../Common/ListaFormaPago";
import ListaMetodoPago from "./../Common/ListaMetodoPago";

const FacturaCForm = ({ handleOnChange, handleChecked, data }) => {
  const {
    RFC,
    Cliente,
    empresaFacturadora,
    conceptoFactura,
    condicionPago,
    formaPago,
    montoTotal,
    usoCFDI,
    tipoComprobante,
    metodoPago,
    direccionCliente,
    email,
    generada,
  } = data;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            label="RFC"
            required
            id="RFC"
            name="RFC"
            value={RFC}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Cliente"
            name="Cliente"
            label="Cliente de la factura"
            value={Cliente}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="empresaFacturadora"
            name="empresaFacturadora"
            label="Empresa que factura"
            value={empresaFacturadora}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="direccionCliente"
            name="direccionCliente"
            label="Direccion cliente"
            value={direccionCliente}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="montoTotal"
            name="montoTotal"
            label="Monto total de la factura"
            value={montoTotal}
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ListaCondicionesPago
            onChange={handleOnChange}
            value={condicionPago}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ListaFormaPago onChange={handleOnChange} value={formaPago} />
        </Grid>

        <Grid item xs={12} sm={12}>
          <ListaTipoComprobante
            onChange={handleOnChange}
            value={tipoComprobante}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ListaUsoCFDI onChange={handleOnChange} value={usoCFDI} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <ListaMetodoPago onChange={handleOnChange} value={metodoPago} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControlLabel
            control={
              <Switch
                name="generada"
                id="generada"
                color="primary"
                checked={generada}
                onChange={handleChecked}
              />
            }
            label="Generada"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FacturaCForm;
