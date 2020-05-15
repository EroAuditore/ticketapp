import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Drawer,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import FilterListIcon from "@material-ui/icons/FilterList";
import TableContainer from "@material-ui/core/TableContainer";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import { startGetDepositos } from "./../../Redux/Actions/depositos";
import { depositosResult, isDepositosLoading } from "./../../Redux/Selectors";
import TableList from "./TableList";
import findTextCustom from "./../Common/findTextCustom";

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

const Depositos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const depositosList = useSelector((state) => depositosResult(state));
  const [drawerState, setdrawerState] = useState(false);

  const toggleDrawer = () => {
    setdrawerState(!drawerState);
    console.log(drawerState);
  };

  useEffect(() => {
    const getDepositos = () => dispatch(startGetDepositos());
    getDepositos();
    /*if (!depositosList) dispatch(startGetDepositos());*/
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <h2>Depositos</h2>
            </div>
          </Grid>
          <Grid item xs>
            <findTextCustom />
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={toggleDrawer}
              startIcon={<FilterListIcon />}
            >
              Filtros
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <TableList data={depositosList} toggleDrawer={toggleDrawer} />
            </TableContainer>
          </Grid>
        </Grid>
        <Drawer anchor="right" open={drawerState} onClose={toggleDrawer}>
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
                    <Typography variant="h5" component="h2">
                      Validar deposito:
                    </Typography>
                    <Typography color="textSecondary">Tciket:</Typography>
                    <Typography variant="body2" component="p">
                      Monto:
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Validar</Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <div>Detalle</div>
              </Grid>
            </Grid>
          </div>
        </Drawer>
      </Container>
    </React.Fragment>
  );
};

export default Depositos;
