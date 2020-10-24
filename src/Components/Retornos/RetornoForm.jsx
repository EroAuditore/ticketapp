import React from "react";

import { Grid, TextField, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import NumberFormatCustom from "./../Common/NumberFormatCustom";
import ListaBancos from "./../Common/ListaBancos";

function renderForm(tipo, handleOnChange) {
  switch (tipo) {
    case "Efectivo":
      return (
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombreRetorno"
            name="nombreRetorno"
            label="Persona que recibe"
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
      );
    case "Transferencia SPEI":
      return (
        <React.Fragment>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombreRetorno"
              name="nombreRetorno"
              label="Nombre del titular"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Banco"
              name="Banco"
              label="Banco"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Cuenta_clabe"
              name="Cuenta_clabe"
              label="CLABE interbancaria"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
        </React.Fragment>
      );

    case "Pago TDC":
      return (
        <React.Fragment>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombreRetorno"
              name="nombreRetorno"
              label="Nombre del titular"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Banco"
              name="Banco"
              label="Banco"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Cuenta_clabe"
              name="Cuenta_clabe"
              label="No Tarjeta"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
        </React.Fragment>
      );

    case "Cheque":
      return (
        <React.Fragment>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombreRetorno"
              name="nombreRetorno"
              label="Nombre a quien se emite"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
        </React.Fragment>
      );

    case "Dispersion nomina":
      return (
        <React.Fragment>
          <Grid item xs={12} sm={6}></Grid>
        </React.Fragment>
      );

    case "Transferencia extranjero":
      return (
        <React.Fragment>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="nombreRetorno"
              name="nombreRetorno"
              label="Nombre del beneficiario"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Banco"
              name="Banco"
              label="Banco"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Cuenta_clabe"
              name="Cuenta_clabe"
              label="Cuenta del beneficiario"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="codigoSwift"
              name="codigoSwift"
              label="Codigo Swift"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="direccionBanco"
              name="direccionBanco"
              label="Direccion banco"
              fullWidth
              variant="outlined"
              size="small"
              onChange={handleOnChange}
            />
          </Grid>
        </React.Fragment>
      );
  }
}

const RetornoForm = (props) => {
  const { handleOnChange, data } = props;
  const { formaRetorno } = data;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Nueva instruccion de retorno
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <InputLabel id="formaRetorno">Forma retorno</InputLabel>
        <Select
          labelId="formaRetorno"
          id="formaRetorno"
          name="formaRetorno"
          onChange={handleOnChange}
          value={formaRetorno}
          fullWidth
        >
          <MenuItem value={"Efectivo"}>Efectivo</MenuItem>
          <MenuItem value={"Transferencia SPEI"}>Transferencia SPEI</MenuItem>
          <MenuItem value={"Pago TDC"}>Pago TDC</MenuItem>
          <MenuItem value={"Cheque"}>Cheque</MenuItem>
          <MenuItem value={"Dispersion nomina"}>Dispersion Nomina</MenuItem>
          <MenuItem value={"Transferencia extranjero"}>
            Transferencia extranjero
          </MenuItem>
        </Select>
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
      {renderForm(formaRetorno, handleOnChange)}

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
