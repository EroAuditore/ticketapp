import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import {
  startEditFactura,
  startGetSolicitudes,
  startAttendFacturas,
  nuevaSolicitud,
} from "../../../Redux/Actions/facturas";
import CustomTextBox from "./../../Common/CustomTextBox";
import { useHistory } from "react-router-dom";
import TableList from "./TableList";
import { solicitudesSelector } from "../../../Redux/Selectors";

import AlertForm from "./../../Common/AlertForm";
import jwtDecode from "jwt-decode";

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
  const dispatch = useDispatch();
  const data = useSelector((state) => solicitudesSelector(state));
  const [selectedTake, setSelectedTake] = useState({});
  const [alertState, setAlertState] = useState(false);

  const [filterText, setFilterText] = useState("");
  const handleFilterClick = () => {
    const findObj = { filterText: filterText };
    /*dispatch(startFilterMovimiento(findObj)); */
  };
  const handleFiltertextChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleAdd = () => {
    dispatch(nuevaSolicitud());
    history.push("/facturas/solicitud/nueva");
  };

  const handleTake = () => {
    const jwt = localStorage.getItem("token");
    const { data: userData } = jwtDecode(jwt);
    selectedTake.ID_usuario = userData.ID_usuario;
    dispatch(startAttendFacturas(selectedTake));
    setAlertState(!alertState);
  };

  const selectedTakeObj = (obj) => {
    console.log("Selected obj", obj);
    setSelectedTake(obj);
    setAlertState(!alertState);
  };
  const toggleTake = () => {
    setAlertState(!alertState);
  };

  useEffect(() => {
    //consultamos con la api la base de datos llamamos startGetTickets
    const getData = () => dispatch(startGetSolicitudes());
    getData();
  }, []);

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
              <TableList
                data={data}
                selectedTakeObj={(obj) => selectedTakeObj(obj)}
              />
            </TableContainer>
          </Grid>
        </Grid>
        <AlertForm
          alertState={alertState}
          handleClose={toggleTake}
          handleTake={handleTake}
          title={"Solcitud Factura"}
        >
          {"Deseas tomar la solicitud de factura?"}
        </AlertForm>
      </Container>
    </React.Fragment>
  );
};

export default Solicitud;
