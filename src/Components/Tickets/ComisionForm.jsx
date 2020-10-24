import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import { Grid, TextField, Typography } from "@material-ui/core";
import NumberFormatCustom from "./../Common/NumberFormatCustom";
import PercentFormatCustom from "./../Common/PercentFormatCustom";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ComisionForm = ({ handleOnChange, onCalculoPorcentaje, comision }) => {
  const { Monto, Porcentaje, Tipo } = comision;
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Nueva comision
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
        <InputLabel id="tipo">Tipo</InputLabel>
        <Select
          labelId="Tipo"
          id="Tipo"
          name="Tipo"
          onChange={handleOnChange}
          value={Tipo}
          fullWidth
        >
          <MenuItem value={"Comision Agente"}>Comision Agente</MenuItem>
          <MenuItem value={"Comision Oficina"}>Comision Oficina</MenuItem>
          <MenuItem value={"Efectivo"}>Efectivo</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={5}>
        <TextField
          required
          id="Porcentaje"
          name="Porcentaje"
          label="Porcentaje de la comision"
          fullWidth
          variant="outlined"
          value={Porcentaje}
          size="small"
          InputProps={{
            inputComponent: PercentFormatCustom,
          }}
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={1} sm={2}>
        <Button
          variant="contained"
          color="primary"
          endIcon={
            <SwapHorizontalCircleIcon>Calcular</SwapHorizontalCircleIcon>
          }
          onClick={onCalculoPorcentaje}
        >
          Calcular
        </Button>
      </Grid>
      <Grid item xs={12} sm={5}>
        <TextField
          required
          id="Monto"
          name="Monto"
          label="Monto de la comision"
          fullWidth
          variant="outlined"
          value={Monto}
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
          id="comentarios"
          name="Comentarios"
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

export default ComisionForm;
