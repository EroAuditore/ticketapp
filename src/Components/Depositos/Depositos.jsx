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
import FilterListIcon from "@material-ui/icons/FilterList";
import TableContainer from "@material-ui/core/TableContainer";
import { startGetDepositos } from "./../../Redux/Actions/depositos";
import { depositosResult, isDepositosLoading } from "./../../Redux/Selectors";
import TableList from "./TableList";
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

const Depositos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const depositosList = useSelector((state) => depositosResult(state));
  const [drawerState, setdrawerState] = useState(false);
  const [filterText, setFilterText] = useState("");

  const toggleDrawer = () => {
    setdrawerState(!drawerState);
    console.log(drawerState);
  };

  useEffect(() => {
    const getDepositos = () => dispatch(startGetDepositos());
    getDepositos();
    /*if (!depositosList) dispatch(startGetDepositos());*/
  }, []);

  const handleFilterClick = () => {
    const findObj = { filterText: filterText };
    /*dispatch(startFilterMovimiento(findObj));*/
  };

  const handleFiltertextChange = (e) => {
    setFilterText(e.target.value);
  };

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
            <CustomTextBox
              onClick={handleFilterClick}
              onChange={handleFiltertextChange}
            />
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
          <FilterForm toggleDrawer={toggleDrawer} />
        </Drawer>
      </Container>
    </React.Fragment>
  );
};

export default Depositos;
