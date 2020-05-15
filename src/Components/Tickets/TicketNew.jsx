import React, { Fragment, useState } from "react";

import {
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Box,
  Fab,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import AddIcon from "@material-ui/icons/Add";
import MovimientoForm from "./MovimientoForm";
import RetornosTab from "./../Retornos/RetornosTab";
import DepositosTab from "./../Depositos/DepositosTab";
import FacturasTab from "../Facturas/FacturasTab";
import ModalForm from "./../Common/ModalForm";
import DepositoForm from "./../Depositos/DepositoForm";
import FacturaForm from "./../Facturas/FacturaForm";
import RetornoForm from "./../Retornos/RetornoForm";
import { useDispatch } from "react-redux";
import {
  addFactura,
  addDeposito,
  addRetorno,
  deleteFactura,
  deleteDeposito,
  deleteRetorno,
  startSaveMovimiento,
} from "../../Redux/Actions/movimientos";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  paperModal: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },

  drawerContent: {
    width: 450,
    padding: 25,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const TicketNew = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [ModalState, setModalState] = useState(false);
  const dispatch = useDispatch();
  const [factura, setFactura] = useState({
    _id: 1,
    rfcFactura: "",
    clienteFactura: "",
    empresaFactura: "",
    conceptoFactura: "",
    condicionPago: "",
    formaPago: "",
    montoFactura: "",
  });
  const [deposito, setDeposito] = useState({
    _id: 1,
    bancoDeposito: "",
    depositoMonto: "",
    nombreDeposito: "",
    comentarioDeposito: "",
    fechaDeposito: new Date(),
    fechaDepositoStr: moment().format("YYYY/MM/DD"),
  });

  const [retorno, setRetorno] = useState({
    _id: 1,
    nombreRetorno: "",
    entidadRetorno: "",
    retornoMonto: "",
    comentarioRetorno: "",
    cuentaRetorno: "",
  });

  const [movimiento, setMovimiento] = useState({
    agente: "",
    nombre: "",
    cliente: "",
    cantidadTotal: 0,
    comisionAgente: 0,
    comisionOficina: 0,
  });

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleCloseAdd = () => {
    setModalState(false);
  };

  const handleSaveAdd = (params) => {
    setModalState(false);
    switch (activeTab) {
      case 0:
        addFacturaIntab();
        break;
      case 1:
        addDepositoIntab();
        break;
      case 2:
        addRetornoIntab();
        break;
      default:
        break;
    }
  };

  const addFacturaIntab = () => {
    dispatch(addFactura(factura));
    setFactura({
      _id: factura._id + 1,
      rfcFactura: "",
      clienteFactura: "",
      empresaFactura: "",
      conceptoFactura: "",
      condicionPago: "",
      formaPago: "",
      montoFactura: "",
    });
  };
  const addDepositoIntab = () => {
    dispatch(addDeposito(deposito));
    setDeposito({
      _id: deposito._id + 1,
      bancoDeposito: "",
      depositoMonto: "",
      nombreDeposito: "",
      comentarioDeposito: "",
      fechaDeposito: new Date(),
      fechaDepositoStr: moment().format("YYYY/MM/DD"),
    });
  };

  const addRetornoIntab = () => {
    dispatch(addRetorno(retorno));
    setRetorno({
      _id: retorno._id + 1,
      nombreRetorno: "",
      entidadRetorno: "",
      retornoMonto: "",
      comentarioRetorno: "",
    });
  };

  const handleOnChangeFacturaForm = (e) => {
    setFactura({
      ...factura,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnChangeDepositoForm = (e) => {
    setDeposito({
      ...deposito,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnChangeRetornoForm = (e) => {
    setRetorno({
      ...retorno,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeMovimientoForm = (e) => {
    setMovimiento({
      ...movimiento,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setDeposito({
      ...deposito,
      fechaDeposito: date,
      fechaDepositoStr: date.format("YYYY/MM/DD"),
    });
  };

  const handleAddClick = () => {
    setModalState(true);
  };

  const handleDeleteClick = (_id) => {
    switch (activeTab) {
      case 0:
        dispatch(deleteFactura(_id));
        break;
      case 1:
        dispatch(deleteDeposito(_id));
        break;
      case 2:
        dispatch(deleteRetorno(_id));
        break;
      default:
        break;
    }
  };

  const OnSaveMovimiento = () => {
    dispatch(startSaveMovimiento(movimiento));
  };

  return (
    <Fragment>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<SaveAltIcon />}
              onClick={OnSaveMovimiento}
            >
              Guardar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <MovimientoForm onChange={handleOnChangeMovimientoForm} />
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              aria-label="Movimientos tab"
              value={activeTab}
              onChange={handleChange}
            >
              <Tab label="Facturas" />
              <Tab label="Depositos" />
              <Tab label="Retornos" />
            </Tabs>
          </Grid>
          <Grid item xs={1}>
            <Fab color="primary" aria-label="add" onClick={handleAddClick}>
              <AddIcon />
            </Fab>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TabPanel value={activeTab} index={0}>
                <FacturasTab
                  handleDeleteClick={(id) => handleDeleteClick(id)}
                />
              </TabPanel>
              <TabPanel value={activeTab} index={1}>
                <DepositosTab
                  handleDeleteClick={(id) => handleDeleteClick(id)}
                />
              </TabPanel>
              <TabPanel value={activeTab} index={2}>
                <RetornosTab
                  handleDeleteClick={(id) => handleDeleteClick(id)}
                />
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
        <ModalForm
          ModalState={ModalState}
          handleCloseAdd={handleCloseAdd}
          handleSaveAdd={handleSaveAdd}
          ActiveTab={activeTab}
        >
          <Paper className={classes.paperModal}>
            {activeTab === 0 ? (
              <FacturaForm handleOnChange={handleOnChangeFacturaForm} />
            ) : activeTab === 1 ? (
              <DepositoForm
                handleOnChange={handleOnChangeDepositoForm}
                handleDateChange={handleDateChange}
                selectedDate={deposito.fechaDeposito}
              />
            ) : activeTab === 2 ? (
              <RetornoForm handleOnChange={handleOnChangeRetornoForm} />
            ) : (
              <div></div>
            )}
          </Paper>
        </ModalForm>
      </Container>
    </Fragment>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TicketNew;
