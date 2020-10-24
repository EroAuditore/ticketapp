import React, { Fragment } from "react";

import { Grid, TextField, Typography, FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import NumberFormatCustom from "./../../Common/NumberFormatCustom";
import Select from "@material-ui/core/Select";
import { agentesSelector, clientesSelector } from "../../../Redux/Selectors";
import { useSelector } from "react-redux";

const MovimientoForm = (props) => {
  const { movimiento } = props;
  const { cantidadTotal, agente, cliente } = movimiento;

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Nuevo movimiento
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="Agente"
            name="agente"
            label="Agente"
            fullWidth
            variant="outlined"
            size="small"
            value={agente}
            /*onChange={onChange}*/
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="Cliente"
            name="cliente"
            label="Cliente"
            fullWidth
            variant="outlined"
            size="small"
            value={cliente}
            /*onChange={onChange}*/
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
            value={cantidadTotal}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            /*onChange={onChange}*/
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MovimientoForm;
