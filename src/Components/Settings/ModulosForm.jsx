import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CardHeader from "@material-ui/core/CardHeader";

const ModulosForm = ({ data, handleChecked }) => {
  const { movimientos, retornos, facturas, depositos, configuracion } = data;
  return (
    <Card>
      <CardHeader title="Accesos" />
      <Divider />
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  name="movimientos"
                  id="movimientos"
                  color="primary"
                  checked={movimientos}
                  onChange={handleChecked}
                />
              }
              label="Movimientos"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="retornos"
                  id="retornos"
                  color="primary"
                  checked={retornos}
                  onChange={handleChecked}
                />
              }
              label="Retornos"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="facturas"
                  id="facturas"
                  color="primary"
                  checked={facturas}
                  onChange={handleChecked}
                />
              }
              label="Facturacion"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="depositos"
                  id="depositos"
                  color="primary"
                  checked={depositos}
                  onChange={handleChecked}
                />
              }
              label="Depositos"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="configuracion"
                  id="configuracion"
                  color="primary"
                  checked={configuracion}
                  onChange={handleChecked}
                />
              }
              label="Configuracion"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default ModulosForm;
