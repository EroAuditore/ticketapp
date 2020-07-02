import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Grid, Paper, Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FilterListIcon from "@material-ui/icons/FilterList";
import TableContainer from "@material-ui/core/TableContainer";

import { ticketsResult, isTicketsLoading } from "./../../Redux/Selectors";
import TableList from "./TableList";
import CreateIcon from "@material-ui/icons/Create";
import {
  startGetTickets,
  startFilterMovimiento,
} from "../../Redux/Actions/tickets";
import { withRouter } from "react-router-dom";

import CustomTextBox from "./../Common/CustomTextBox";
import FilterForm from "./FilterForm";

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

const Tickets = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const data = useSelector((state) => ticketsResult(state));

  const [drawerState, setdrawerState] = useState(false);
  const [filterText, setFilterText] = useState("");

  const toggleDrawer = () => {
    setdrawerState(!drawerState);
  };

  const handleAddTicket = () => {
    history.push("/tickets/nuevo");
  };

  const handleFilterClick = () => {
    const findObj = { filterText: filterText };
    dispatch(startFilterMovimiento(findObj));
  };

  const handleFiltertextChange = (e) => {
    setFilterText(e.target.value);
  };

  useEffect(() => {
    //consultamos con la api la base de datos llamamos startGetTickets
    const getTickets = () => dispatch(startGetTickets());
    getTickets();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <h2>Movimientos</h2>
            </div>
          </Grid>
          <Grid item xs>
            <CustomTextBox
              onClick={handleFilterClick}
              onChange={handleFiltertextChange}
            />
          </Grid>
          <Grid item xs>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CreateIcon />}
              onClick={handleAddTicket}
            >
              Nuevo
            </Button>
          </Grid>
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
              <TableList data={data} toggleDrawer={toggleDrawer} />
            </TableContainer>
          </Grid>
        </Grid>
        <Drawer anchor="right" open={drawerState} onClose={toggleDrawer}>
          <FilterForm toggleDrawer={toggleDrawer} />
        </Drawer>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(Tickets);
