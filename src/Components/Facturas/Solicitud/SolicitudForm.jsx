import React from "react";

import {
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import { agentesSelector, clientesSelector } from "../../../Redux/Selectors";
import { useSelector } from "react-redux";

const SolicitudForm = ({
  data,
  handleOnChange,
  OnAgenteChange,
  OnClienteChange,
}) => {
  const { Agente, Cliente, Comentarios } = data;
  const agentesList = useSelector((state) => agentesSelector(state));
  const clientesList = useSelector((state) => clientesSelector(state));
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth size="small">
            <InputLabel id="tipo">Agente</InputLabel>
            <Select
              labelId="Agente"
              id="Agente"
              name="Agente"
              onChange={OnAgenteChange}
              fullWidth
              value={Agente}
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
              name="Cliente"
              onChange={OnClienteChange}
              fullWidth
              value={Cliente}
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

        <Grid item xs={12} sm={12}>
          <TextField
            label="Comentarios"
            required
            id="Comentarios"
            name="Comentarios"
            value={Comentarios}
            fullWidth
            multiline
            rowsMax={3}
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
