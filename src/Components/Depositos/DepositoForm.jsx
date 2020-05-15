import React from "react";

import "date-fns";

import { Grid, TextField, Typography } from "@material-ui/core";

import MomentUtils from "@date-io/moment";
import NumberFormatCustom from "./../Common/NumberFormatCustom";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const DepositoForm = (props) => {
  const { handleOnChange, handleDateChange, selectedDate } = props;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Nuevo deposito a validar
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="bancoDeposito"
          name="bancoDeposito"
          label="Banco deposito"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="depositoMonto"
          name="depositoMonto"
          label="Monto depositado"
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
          required
          id="nombreDeposito"
          name="nombreDeposito"
          label="Nombre del depositante"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          multiline
          id="comentarioDeposito"
          name="comentarioDeposito"
          label="Comentarios"
          fullWidth
          variant="outlined"
          size="small"
          onChange={handleOnChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="YYYY/MM/DD"
            margin="none"
            id="fechaDeposito"
            name="fechaDeposito"
            label="Fecha deposito"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
};

export default DepositoForm;
