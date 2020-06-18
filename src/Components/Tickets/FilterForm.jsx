import React from "react";

import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  drawerContent: {
    width: 450,
    padding: 25,
  },
}));

const FilterForm = ({ toggleDrawer }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.drawerContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              size="small"
              onClick={toggleDrawer}
              startIcon={<CloseIcon />}
            >
              Cerrar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="h2">
                      Filtro
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="Agente"
                      name="Agente"
                      label="Agente"
                      /* value={empresaFacturadora} */
                      fullWidth
                      variant="outlined"
                      size="small"
                      /* onChange={handleOnChange} */
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="Cliente"
                      name="Cliente"
                      label="Cliente"
                      /* value={empresaFacturadora} */
                      fullWidth
                      variant="outlined"
                      size="small"
                      /* onChange={handleOnChange} */
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={toggleDrawer}>
                  Aplicar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default FilterForm;
