import React from "react";

import { Grid, TextField, Typography } from "@material-ui/core";
import NumberFormatCustom from "./../Common/NumberFormatCustom";
import ListaCondicionesPago from "../Common/ListaCondicionesPago";

import ListaFormaPago from "../Common/ListaFormaPago";

const FacturaForm = ({ handleOnChange }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Nueva Factura a generar
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="RFC"
          required
          id="rfcFactura"
          name="rfcFactura"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="clienteFactura"
          name="clienteFactura"
          label="Cliente de la factura"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="empresaFactura"
          name="empresaFactura"
          label="Empresa que factura"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="conceptoFactura"
          name="conceptoFactura"
          label="Concepto de la factura"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ListaCondicionesPago onChange={handleOnChange} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ListaFormaPago onChange={handleOnChange} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="montoFactura"
          name="montoFactura"
          label="Monto de la factura"
          fullWidth
          variant="outlined"
          size="small"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
          onChange={handleOnChange}
        />
      </Grid>
    </Grid>
  );
};

export default FacturaForm;
