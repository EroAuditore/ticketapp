import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import CountUp from "react-countup";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddIcon from "@material-ui/icons/Add";
import FacturaCForm from "../FacturaCForm";
import SolicitudForm from "./SolicitudForm";
import FacturaTable from "./FacturaTable";
import DialogBox from "../Atender/DialogBox";
import {
  addFactura,
  deleteFactura,
  startSaveFacturas,
  addPartida,
} from "./../../../Redux/Actions/facturas";
import { v4 as uuidv4 } from "uuid";
import { getCurrentUserID } from "./../../../Services/usersService";
import { clienteSelector } from "./../../../Redux/Selectors/index";
import {
  startClientes,
  startCliente,
} from "../../../Redux/Actions/agenteCliente";
import { startAgentes } from "./../../../Redux/Actions/agenteCliente";
import ModalForm from "./../../Common/ModalForm";
import PartidaForm from "./../PartidaForm";
import TabPanel from "./../../Common/TabPanel";
import DropZone from "./../../Common/DropZone";

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

const NuevaSolicitud = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [dialogState, setDialogState] = useState(false);
  const [totalSolicitud, setTotalSolicitud] = useState(0);
  const [startCounter, setStartCounter] = useState(0);
  const [ModalState, setModalState] = useState(false);
  const [archivo, setArchivo] = useState([]);

  const [factura, setFactura] = useState({
    _id: uuidv4(),
    RFC: "",
    Cliente: "",
    empresaFacturadora: "",
    conceptoFactura: "",
    condicionPago: "",
    formaPago: "",
    montoTotal: "",
    usoCFDI: "",
    tipoComprobante: "",
    metodoPago: "",
    direccionCliente: "",
    email: "",
    generada: false,
    moneda: "MNX - Pesos",
    subTotal: "",
    iva: "",
    partidas: [],
  });

  const [solicitud, setSolicitud] = useState({
    Agente: "",
    Cliente: "",
    Comentarios: "",
    totalSolicitud: 0,
    userId: getCurrentUserID(),
    Archivo: [],
  });

  const [partida, setPartida] = useState({
    _id: uuidv4(),
    facturaId: "",
    cantidad: 0,
    claveUnidad: "",
    clavePs: "",
    descripcion: "",
    valorUnitario: 0,
    importe: 0,
  });
  const handleOnChangeFacturaForm = (e) => {
    setFactura({
      ...factura,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeSolitudForm = (e) => {
    setSolicitud({
      ...solicitud,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (event) => {
    setFactura({ ...factura, [event.target.id]: event.target.checked });
  };

  const handleOnChangePartidaForm = (e) => {
    setPartida({
      ...partida,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    console.log("Handleupdate Start Update Factura", factura);
  };

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleClose = () => {
    /*setModalState(true); */
    setDialogState(false);
  };
  const handleAddClick = () => {
    setTotalSolicitud(
      parseFloat(totalSolicitud) + parseFloat(factura.montoTotal)
    );
    setFactura({ ...factura, _id: uuidv4() });
    dispatch(addFactura(factura));
    setDialogState(false);
  };

  const onAgregar = () => {
    setDialogState(true);
  };

  const handleCountUp = () => {
    setStartCounter(totalSolicitud);
  };

  const handleDeleteClick = (facturaEdit) => {
    setTotalSolicitud(
      parseFloat(totalSolicitud) - parseFloat(facturaEdit.montoTotal)
    );

    dispatch(deleteFactura(facturaEdit._id));
  };

  const onSaveSol = () => {
    dispatch(startSaveFacturas(solicitud));
    console.log("guardando la solicitud");
  };

  useEffect(() => {
    //consultamos con la api la base de datos llamamos startGetTickets
    const getAgentes = () => dispatch(startAgentes());
    getAgentes();
  }, []);

  const selectedClient = useSelector((state) => clienteSelector(state));

  useEffect(() => {
    setFactura({
      ...factura,
      RFC: selectedClient.RFC,
      Cliente: selectedClient.razonSocial,
      email: selectedClient.email,
      direccionCliente: selectedClient.direccion,
    });
  }, [selectedClient]);

  const OnAgenteChange = (e) => {
    setSolicitud({
      ...solicitud,
      [e.target.name]: e.target.value,
      idAgente: e.target.value,
    });

    const agente = {
      _id: e.target.value,
    };
    dispatch(startClientes(agente));
  };

  const OnClienteChange = (e) => {
    setSolicitud({
      ...solicitud,
      [e.target.name]: e.target.value,
      idCliente: e.target.value,
    });

    const cliente = {
      _id: e.target.value,
    };

    dispatch(startCliente(cliente));
  };

  const handleCloseAdd = () => {
    setModalState(false);
  };

  const handleSaveAdd = (params) => {
    setModalState(false);
  };

  const handleAddPartida = (row) => {
    setModalState(true);
    setPartida({
      ...partida,
      _id: uuidv4(),
      facturaId: row._id,
      selectedFactura: row,
    });
  };

  const handleNewPartida = () => {
    dispatch(addPartida(partida));
  };

  const handleFileUpload = (file) => {
    setSolicitud({
      ...solicitud,
      Archivo: file,
    });
  };

  const onCalculoTotal = () => {
    const { subTotal } = factura;
    setFactura({
      ...factura,
      iva: parseFloat(subTotal) * 0.16,
      montoTotal: parseFloat(subTotal) + parseFloat(subTotal) * 0.16,
    });
  };

  useEffect(() => {
    setSolicitud({ ...solicitud, totalSolicitud: totalSolicitud });
  }, [totalSolicitud]);

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <div className={classes.paperTitle}>
              <h2>Solicitud de facturas</h2>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveAltIcon />}
              onClick={onSaveSol}
            >
              Guardar
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <SolicitudForm
                data={solicitud}
                handleOnChange={handleOnChangeSolitudForm}
                OnAgenteChange={OnAgenteChange}
                OnClienteChange={OnClienteChange}
              />
            </Paper>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddBoxIcon />}
                onClick={onAgregar}
              >
                Agregar
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom color="textSecondary">
                Total
              </Typography>
              <Typography variant="h4" gutterBottom color="textPrimary">
                <CountUp
                  start={startCounter}
                  end={totalSolicitud}
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
          <Grid item xs={12}>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              aria-label="Movimientos tab"
              value={activeTab}
              onChange={handleChange}
            >
              <Tab label="Facturas" />
              <Tab label="Documento" />
            </Tabs>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TabPanel value={activeTab} index={0}>
                <FacturaTable
                  onDelete={(facturaEdit) => handleDeleteClick(facturaEdit)}
                  handleAddClick={(row) => handleAddPartida(row)}
                />
              </TabPanel>
              <TabPanel value={activeTab} index={1}>
                <DropZone onChange={(file) => handleFileUpload(file)} />
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
        <DialogBox
          dialogState={dialogState}
          handleClose={handleClose}
          handleOk={handleAddClick}
          title="Datos de la factura"
        ></DialogBox>
        <ModalForm
          ModalState={dialogState}
          handleCloseAdd={handleClose}
          handleSaveAdd={handleAddClick}
        >
          <Paper className={classes.paperModal}>
            <FacturaCForm
              data={factura}
              handleOnChange={handleOnChangeFacturaForm}
              handleChecked={handleChecked}
              onCalculoTotal={onCalculoTotal}
            />
          </Paper>
        </ModalForm>
        <ModalForm
          ModalState={ModalState}
          handleCloseAdd={handleCloseAdd}
          handleSaveAdd={handleSaveAdd}
        >
          <Paper className={classes.paperModal}>
            <PartidaForm
              handleAddPartida={handleNewPartida}
              handleOnChange={handleOnChangePartidaForm}
              data={partida}
            />
          </Paper>
        </ModalForm>
      </Container>
    </React.Fragment>
  );
};

export default NuevaSolicitud;
