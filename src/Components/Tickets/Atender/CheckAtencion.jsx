import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CardHeader from "@material-ui/core/CardHeader";

const CheckAtencion = ({ data, handleChecked, onValidate }) => {
  const { comisiones, retornos, depositos } = data;
  console.log("check atencion data:", data);

  return (
    <Card>
      <CardHeader title="Validar movimiento" />
      <Divider />
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
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
                  id="comisiones"
                  name="comisiones"
                  color="primary"
                  checked={comisiones}
                  onChange={handleChecked}
                />
              }
              label="Comisiones"
            />
          </Grid>

          <Grid item xs={12}></Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={onValidate}>
          Validar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CheckAtencion;
