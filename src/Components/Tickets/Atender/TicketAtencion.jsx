import React, { Fragment, useState, useEffect } from "react";

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
import RetornosTab from "./../../Retornos/RetornosTab";
import DepositosTab from "./../../Depositos/DepositosTab";

import ModalForm from "./../../Common/ModalForm";
import DepositoForm from "./../../Depositos/DepositoForm";

import RetornoForm from "./../../Retornos/RetornoForm";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import CountUp from "react-countup";
import { v4 as uuidv4 } from "uuid";
import ComisionForm from "./../ComisionForm";
import ComisionTab from "./../ComisionTab";

import DropZone from "./../../Common/DropZone";
import { movimientoSelector } from "../../../Redux/Selectors";
import MovimientoTable from "./MovimientoTable";
import CheckAtencion from "./CheckAtencion";
import MovimientoView from "./MovimientoView";
import { startVM } from "../../../Redux/Actions/movimientos";
import FilesMovimiento from "./FilesMovimiento";
import { fileURL } from "../../../Services/login";

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

const TicketAtencion = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [ModalState, setModalState] = useState(false);
  const [totalMovimiento, setTotalMovimiento] = useState(0);
  const [totalDepositos, setTotalDepositos] = useState(0);
  const [totalRetornos, setTotalRetornos] = useState(0);
  const [totalComisiones, setTotalComisiones] = useState(0);
  const mov = useSelector((state) => movimientoSelector(state));

  const [startCounter, setStartCounter] = useState(0);
  const dispatch = useDispatch();

  const [deposito, setDeposito] = useState({
    _id: uuidv4(),
    bancoDeposito: "",
    depositoMonto: "",
    nombreDeposito: "",
    comentarioDeposito: "",
    fechaDeposito: new Date(),
    fechaDepositoStr: moment().format("YYYY/MM/DD"),
  });

  const [retorno, setRetorno] = useState({
    _id: uuidv4(),
    nombreRetorno: "",
    entidadRetorno: "",
    retornoMonto: "",
    comentarioRetorno: "",
    cuentaRetorno: "",
  });

  const [comision, setComision] = useState({
    _id: uuidv4(),
    Tipo: "",
    Monto: 0,
    Comentarios: "",
    Porcentaje: 0,
  });

  const [movimiento, setMovimiento] = useState({
    agente: "",
    nombre: "",
    cliente: "",
    cantidadTotal: 0,
    comisionAgente: 0,
    comisionOficina: 0,
    estatusFactura: "pendiente",
    estatusRetorno: "pendiente",
    estatusDeposito: "pendiente",
    estatusComision: "pendiente",
    retornos: false,
    comisiones: false,
    depositos: false,
    totalDepositos: totalDepositos,
    totalRetornos: totalRetornos,
    totalComisiones: totalComisiones,
    solicitudId: null,
    Archivo: [],
  });

  const [agentesList, setAgentesList] = useState([]);
  const [clientesList, setClientesList] = useState([]);

  const calculartotal = () => {
    setTotalMovimiento(totalDepositos - totalRetornos - totalComisiones);
  };

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleCloseAdd = () => {
    setModalState(false);
  };

  const handleCountUp = () => {
    /*setStartCounter(totalMovimiento);*/
    switch (activeTab) {
      case 0:
        /*addDepositoIntab();*/
        break;
      case 1:
        /*addRetornoIntab();*/
        break;
      case 2:
        /*addRetornoIntab();*/
        break;
      default:
        break;
    }
  };

  const handleSaveAdd = (params) => {
    setModalState(false);
    switch (activeTab) {
      case 0:
        addDepositoIntab();
        break;
      case 1:
        addRetornoIntab();
        break;
      case 2:
        addComisionIntab();
        break;
      default:
        break;
    }
  };

  const addDepositoIntab = () => {
    setTotalDepositos(
      parseFloat(totalDepositos) + parseFloat(deposito.depositoMonto)
    );

    /*dispatch(addDeposito(deposito));*/
    setDeposito({
      _id: uuidv4(),
      bancoDeposito: "",
      depositoMonto: "",
      nombreDeposito: "",
      comentarioDeposito: "",
      fechaDeposito: new Date(),
      fechaDepositoStr: moment().format("YYYY/MM/DD"),
    });
  };

  const addRetornoIntab = () => {
    setTotalRetornos(
      parseFloat(totalRetornos) + parseFloat(retorno.retornoMonto)
    );
    /*dispatch(addRetorno(retorno)); */
    setRetorno({
      _id: uuidv4(),
      nombreRetorno: "",
      entidadRetorno: "",
      retornoMonto: "",
      comentarioRetorno: "",
    });
  };

  const addComisionIntab = () => {
    setTotalComisiones(
      parseFloat(totalComisiones) + parseFloat(comision.Monto)
    );
    /*dispatch(addComision(comision));*/
    setComision({
      _id: uuidv4(),
      Monto: 0,
      Tipo: "",
      Comentarios: "",
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

  const handleOnChangeComisionForm = (e) => {
    setComision({
      ...comision,
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

  const handleChecked = (event) => {
    console.log("handle Checked");
    setMovimiento({ ...movimiento, [event.target.id]: event.target.checked });
  };

  const handleAddClick = () => {
    setModalState(true);
  };

  const handleDeleteClick = (obj) => {
    switch (activeTab) {
      case 0:
        /*dispatch(deleteDeposito(obj._id)); */
        setTotalDepositos(
          parseFloat(totalDepositos) - parseFloat(obj.depositoMonto)
        );
        break;
      case 1:
        /*dispatch(deleteRetorno(obj._id));*/
        setTotalRetornos(
          parseFloat(totalRetornos) - parseFloat(obj.retornoMonto)
        );
        break;
      case 2:
        /*dispatch(deleteComision(obj.target_id));*/
        setTotalComisiones(parseFloat(totalComisiones) - parseFloat(obj.Monto));
        break;
      default:
        break;
    }
  };

  const OnSaveMovimiento = () => {
    /*dispatch(startSaveMovimiento(movimiento));*/
  };

  const onCalculoPorcentaje = () => {
    let resultado = parseFloat(
      (parseFloat(movimiento.cantidadTotal) / 1.16) *
        (parseFloat(comision.Porcentaje) / 100)
    ).toFixed(2);

    setComision({
      ...comision,
      Monto: resultado,
    });
  };

  const handleFileUpload = (file) => {
    console.log("file upload", file);
    setMovimiento({
      ...movimiento,
      Archivo: file,
    });
  };

  const handleValidate = () => {
    dispatch(startVM(movimiento));
  };

  useEffect(() => {
    calculartotal();
  }, [totalDepositos, totalRetornos, totalComisiones]);

  useEffect(() => {
    console.log("Log mov start!", mov);
    setMovimiento({
      ...mov,
      _id: mov._id,
      agente: mov.Agente,
      cliente: mov.Cliente,
      retornos: mov.estatusRetorno == "generado" ? true : false,
      comisiones: mov.estatusComision == "generado" ? true : false,
      depositos: mov.estatusDeposito == "generado" ? true : false,
    });
    setTotalDepositos(parseFloat(mov.totalDepositos));
    setTotalRetornos(parseFloat(mov.totalRetornos));
    setTotalComisiones(parseFloat(mov.totalComisiones));
  }, []);

  const handleDownloadClick = (item) => {
    var url = fileURL();
    window.open(url + item._id, "blank");
  };

  return (
    <Fragment>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              {/*MovimientoForm movimiento={movimiento} />*/}
              <MovimientoView />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" gutterBottom color="textSecondary">
                    Balance
                  </Typography>
                  <Typography variant="h6" gutterBottom color="textPrimary">
                    <CountUp
                      start={startCounter}
                      end={totalMovimiento}
                      duration={2}
                      separator=","
                      decimals={2}
                      decimal="."
                      prefix="$ "
                      onEnd={handleCountUp}
                    />
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" gutterBottom color="textSecondary">
                    Depositos
                  </Typography>
                  <Typography variant="h6" gutterBottom color="textPrimary">
                    <CountUp
                      start={startCounter}
                      end={totalDepositos}
                      duration={2}
                      separator=","
                      decimals={2}
                      decimal="."
                      prefix="$ "
                      onEnd={handleCountUp}
                    />
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" gutterBottom color="textSecondary">
                    Retornos
                  </Typography>
                  <Typography variant="h6" gutterBottom color="textPrimary">
                    <CountUp
                      start={startCounter}
                      end={totalRetornos}
                      duration={2}
                      separator=","
                      decimals={2}
                      decimal="."
                      prefix="$ "
                      onEnd={handleCountUp}
                    />
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" gutterBottom color="textSecondary">
                    Comisiones
                  </Typography>
                  <Typography variant="h6" gutterBottom color="textPrimary">
                    <CountUp
                      start={startCounter}
                      end={totalComisiones}
                      duration={2}
                      separator=","
                      decimals={2}
                      decimal="."
                      prefix="$ "
                      onEnd={handleCountUp}
                    />
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              aria-label="Movimientos tab"
              value={activeTab}
              onChange={handleChange}
            >
              <Tab label="Movimiento" />
              <Tab label="Depositos" />
              <Tab label="Retornos" />
              <Tab label="Comisiones" />
              <Tab label="Adjunto" />
            </Tabs>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TabPanel value={activeTab} index={0}>
                <MovimientoTable />
              </TabPanel>
              <TabPanel value={activeTab} index={1}>
                <DepositosTab
                  handleDeleteClick={(obj) => handleDeleteClick(obj)}
                />
              </TabPanel>
              <TabPanel value={activeTab} index={2}>
                <RetornosTab
                  handleDeleteClick={(obj) => handleDeleteClick(obj)}
                />
              </TabPanel>
              <TabPanel value={activeTab} index={3}>
                <ComisionTab
                  handleDeleteClick={(obj) => handleDeleteClick(obj)}
                />
              </TabPanel>
              <TabPanel value={activeTab} index={4}>
                <FilesMovimiento
                  handleDownloadClick={(item) => handleDownloadClick(item)}
                />
              </TabPanel>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <CheckAtencion
              onValidate={handleValidate}
              data={movimiento}
              handleChecked={handleChecked}
            />
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
              <DepositoForm
                handleOnChange={handleOnChangeDepositoForm}
                handleDateChange={handleDateChange}
                selectedDate={deposito.fechaDeposito}
              />
            ) : activeTab === 1 ? (
              <RetornoForm handleOnChange={handleOnChangeRetornoForm} />
            ) : activeTab === 2 ? (
              <ComisionForm
                handleOnChange={handleOnChangeComisionForm}
                onCalculoPorcentaje={onCalculoPorcentaje}
                comision={comision}
              />
            ) : activeTab === 3 ? (
              <div></div>
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

export default TicketAtencion;
