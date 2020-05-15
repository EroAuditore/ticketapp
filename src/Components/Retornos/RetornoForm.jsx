import React from "react";

import { Grid, TextField, Typography } from "@material-ui/core";
import NumberFormatCustom from "./../Common/NumberFormatCustom";
const RetornoForm = (props) => {
  const { handleOnChange } = props;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Nueva instruccion de retorno
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="nombreRetorno"
          name="nombreRetorno"
          label="Nombre del retorno"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="entidadRetorno"
          name="entidadRetorno"
          label="Entidad de retorno"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="cuentaRetorno"
          name="cuentaRetorno"
          label="Cuenta de retorno"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="retornoMonto"
          name="retornoMonto"
          label="Monto a retornar"
          fullWidth
          variant="outlined"
          size="small"
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
          onChange={handleOnChange}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          multiline
          id="comentarioRetorno"
          name="comentarioRetorno"
          label="Comentarios"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
    </Grid>
  );
};

export default RetornoForm;
