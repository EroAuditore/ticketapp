import React from "react";

import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

const SolicitudForm = ({ data, handleOnChange }) => {
  const { Agente, Cliente } = data;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Agente"
            required
            id="Agente"
            name="Agente"
            value={Agente}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Cliente"
            required
            id="Cliente"
            name="Cliente"
            value={Cliente}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SolicitudForm;
