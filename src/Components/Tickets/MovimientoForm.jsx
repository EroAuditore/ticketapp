import React, { Fragment } from "react";

import { Grid, TextField, Typography, FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import NumberFormatCustom from "./../Common/NumberFormatCustom";
import Select from "@material-ui/core/Select";
import { agentesSelector, clientesSelector } from "../../Redux/Selectors";
import { useSelector } from "react-redux";

const MovimientoForm = (props) => {
  const { onChange, movimiento, OnAgenteChange, OnClienteChange } = props;
  const { cantidadTotal, agente, cliente, idAgente, idCliente } = movimiento;
  const agentesList = useSelector((state) => agentesSelector(state));
  const clientesList = useSelector((state) => clientesSelector(state));
  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
        Nuevo movimiento
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth size="small">
            <InputLabel id="tipo">Agente</InputLabel>
            <Select
              labelId="Agente"
              id="Agente"
              name="agente"
              onChange={OnAgenteChange}
              fullWidth
              value={agente}
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
          <FormControl fullWidth size="small">
            <InputLabel id="tipo">Cliente</InputLabel>
            <Select
              labelId="Cliente"
              id="Cliente"
              name="cliente"
              onChange={OnClienteChange}
              fullWidth
              value={cliente}
            >
              {clientesList &&
                clientesList.map((row) => (
                  <MenuItem key={row._id} value={row._id}>
                    {row.Cliente}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
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
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default MovimientoForm;
