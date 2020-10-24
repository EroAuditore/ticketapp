import React from "react";

import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import NumberFormatCustom from "./../Common/NumberFormatCustom";

import ListaTipoComprobante from "./../Common/ListaTipoComprobante";
import ListaUsoCFDI from "./../Common/ListaUsoCFDI";
import ListaCondicionesPago from "../Common/ListaCondicionesPago";

import ListaFormaPago from "../Common/ListaFormaPago";
import ListaMetodoPago from "./../Common/ListaMetodoPago";
import ListaMoneda from "./../Common/ListaMoneda";

const FacturaCForm = ({
  handleOnChange,
  handleChecked,
  data,
  onCalculoTotal,
}) => {
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
    moneda,
    subTotal,
    iva,
  } = data;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ListaMoneda value={moneda} onChange={handleOnChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Cliente"
            name="Cliente"
            label="Razon social"
            value={Cliente}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            value={email}
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
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="subTotal"
            name="subTotal"
            label="Subtotal de la factura"
            value={subTotal}
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="primary"
            endIcon={
              <SwapHorizontalCircleIcon>Calcular</SwapHorizontalCircleIcon>
            }
            onClick={onCalculoTotal}
          >
            Calcular
          </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="iva"
            name="iva"
            label="IVA"
            value={iva}
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
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
        {/*<Grid item xs={12} sm={12}>
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
          </Grid>*/}
      </Grid>
    </React.Fragment>
  );
};

export default FacturaCForm;
