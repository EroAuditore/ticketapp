import React, { Fragment } from "react";

import { Grid, TextField, Typography } from "@material-ui/core";
import NumberFormatCustom from "./../Common/NumberFormatCustom";

const MovimientoForm = (props) => {
  const { onChange } = props;
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Nuevo movimiento
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="agente"
            name="agente"
            label="Agente"
            fullWidth
            variant="outlined"
            size="small"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Solicitante"
            fullWidth
            variant="outlined"
            size="small"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cliente"
            name="cliente"
            label="Cliente"
            fullWidth
            variant="outlined"
            size="small"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="cantidadTotal"
            name="cantidadTotal"
            label="Cantidad Total"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="comisionAgente"
            name="comisionAgente"
            label="Comision Agente"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="comisionOficina"
            name="comisionOficina"
            label="Comision oficina"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MovimientoForm;
