import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Drawer,
  Card,
  CardActions,
  CardContent,
  TableContainer,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { startEditFactura } from "../../../Redux/Actions/facturas";
import CustomTextBox from "./../../Common/CustomTextBox";
import { useHistory } from "react-router-dom";
import TableList from "./TableList";

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
  paperContent: {
    padding: 30,
  },
}));

const Solicitud = () => {
  const classes = useStyles();
  const history = useHistory();
  /*const data = useSelector((state) => ticketsResult(state));*/
  const data = [];

  const [filterText, setFilterText] = useState("");
  const handleFilterClick = () => {
    const findObj = { filterText: filterText };
    /*dispatch(startFilterMovimiento(findObj)); */
  };
  const handleFiltertextChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleAdd = () => {
    history.push("/facturas/solicitud/nueva");
  };

  const toggleDrawer = () => {
    /*setdrawerState(!drawerState);*/
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <h2>Solicitud de facturas</h2>
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
              onClick={handleAdd}
            >
              Nuevo
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
      </Container>
    </React.Fragment>
  );
};

export default Solicitud;
