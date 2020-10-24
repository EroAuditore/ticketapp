import React, { Fragment } from "react";

import {
  Grid,
  TextField,
  Typography,
  FormControl,
  Button,
} from "@material-ui/core";
import NumberFormatCustom from "./../Common/NumberFormatCustom";
import PartidaList from "./Solicitud/PartidaList";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const PartidaForm = ({ handleAddPartida, handleOnChange, data }) => {
  const classes = useStyles();
  const {
    cantidad,
    claveUnidad,
    clavePs,
    descripcion,
    valorUnitario,
    importe,
    selectedFactura,
  } = data;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <div className={classes.paperTitle}>
            <h2>Partidas</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Cantidad"
            required
            id="cantidad"
            name="cantidad"
            value={cantidad}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Clave unidad"
            required
            id="claveUnidad"
            name="claveUnidad"
            value={claveUnidad}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Clave PS"
            required
            id="clavePs"
            name="clavePs"
            value={clavePs}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Descripcion"
            required
            id="descripcion"
            name="descripcion"
            value={descripcion}
            fullWidth
            variant="outlined"
            size="small"
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="valorUnitario"
            name="valorUnitario"
            label="Valor Unitario"
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
            id="importe"
            name="importe"
            label="Importe"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button size="small" color="primary" onClick={handleAddPartida}>
            Agregar
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <PartidaList factura={selectedFactura} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PartidaForm;
