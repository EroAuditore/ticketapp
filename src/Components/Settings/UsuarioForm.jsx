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
import CardHeader from "@material-ui/core/CardHeader";
import FormControl from "@material-ui/core/FormControl";

const UsuarioForm = ({ handleChange, onSave, data, handleChecked }) => {
  const { nombre, userName, password, area, activo } = data;
  return (
    <Card>
      <CardHeader title="Datos de usuario" />
      <Divider />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              id="nombre"
              name="nombre"
              label="Nombre"
              fullWidth
              onChange={handleChange}
              value={nombre}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="userName"
              name="userName"
              label="Usuario"
              onChange={handleChange}
              value={userName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              label="password"
              fullWidth
              onChange={handleChange}
              value={password}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="lblarea">Area</InputLabel>
              <Select
                labelId="lblarea"
                id="area"
                name="area"
                fullWidth
                onChange={handleChange}
                value={area}
              >
                <MenuItem value={"Tesoreria"}>Tesoreria</MenuItem>
                <MenuItem value={"Facturacion"}>Facturacion</MenuItem>
                <MenuItem value={"Administracion"}>Administracion</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  name="activo"
                  id="activo"
                  color="primary"
                  checked={activo}
                  onChange={handleChecked}
                />
              }
              label="Activo"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={onSave}
        >
          Gardar
        </Button>
      </CardActions>
    </Card>
  );
};

export default UsuarioForm;
