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
import { makeStyles } from "@material-ui/core/styles";
import CountUp from "react-countup";
import FacturaCForm from "../FacturaCForm";
import DialogBox from "../Atender/DialogBox";
import {
  addFactura,
  deleteFactura,
  startSaveFacturas,
  startUploadXML,
  startUploadPDF,
} from "./../../../Redux/Actions/facturas";
import { v4 as uuidv4 } from "uuid";
import { getCurrentUserID } from "./../../../Services/usersService";

import FacturasTable from "./FacturasTable";
import { DropzoneDialog } from "material-ui-dropzone";
import SolicitudView from "./SolicitudView";

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

const AtenderSolicitud = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [dialogState, setDialogState] = useState(false);
  const [totalSolicitud, setTotalSolicitud] = useState(0);
  const [startCounter, setStartCounter] = useState(0);
  const [openFile, setOpenFile] = React.useState(false);
  const [openPDF, setOpenPDF] = React.useState(false);

  const [factura, setFactura] = useState({});
  const [xml, setXml] = useState([]);
  const [pdf, setPdf] = useState([]);
  const { Total_Solicitud } = useSelector((state) => state.facturas.solicitud);

  const [solicitud, setSolicitud] = useState({
    Agente: "",
    Cliente: "",
    Comentarios: "",
    userId: getCurrentUserID(),
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
    console.log(totalSolicitud);
    setSolicitud({ ...solicitud, totalSolicitud: totalSolicitud });
    dispatch(startSaveFacturas(solicitud));
    console.log("guardando la solicitud");
  };

  const OnUploadXML = (row) => {
    setFactura({ ...row, userId: getCurrentUserID() });
    setOpenFile(true);
  };

  const OnUploadPDF = (row) => {
    setFactura({ ...row, userId: getCurrentUserID() });
    setOpenPDF(true);
  };

  useEffect(() => {
    console.log("lenght", xml.length);
    /*console.log( ( &&xml));*/
    if (xml.length > 0) dispatch(startUploadXML({ ...factura, Archivo: xml }));
  }, [xml]);

  useEffect(() => {
    console.log("lenght", pdf.length);
    /*console.log( ( &&xml));*/
    if (pdf.length > 0) dispatch(startUploadPDF({ ...factura, Archivo: pdf }));
  }, [pdf]);

  useEffect(() => {
    setTotalSolicitud(Total_Solicitud);
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <div className={classes.paperTitle}>
              <h2>Solicitud de facturación</h2>
            </div>
          </Grid>
          <Grid item xs={2}>
            {/*<Button
              variant="contained"
              color="primary"
              startIcon={<SaveAltIcon />}
              onClick={onSaveSol}
            >
              Guardar
            </Button>*/}
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <SolicitudView />
            </Paper>
            <Grid item xs={12}>
              {/*<Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddBoxIcon />}
                onClick={onAgregar}
              >
                Agregar
              </Button> */}
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
              <Tab label="Facturas a generar" />
              <Tab label="Movimientos pendientes" />
              <Tab label="Archivo" />
            </Tabs>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FacturasTable
                onDelete={(facturaEdit) => handleDeleteClick(facturaEdit)}
                OnUploadXML={(row) => OnUploadXML(row)}
                OnUploadPDF={(row) => OnUploadPDF(row)}
              />
            </Paper>
          </Grid>
        </Grid>
        <DialogBox
          dialogState={dialogState}
          handleClose={handleClose}
          handleOk={handleAddClick}
          title="Datos de la factura"
        >
          <FacturaCForm
            data={factura}
            handleOnChange={handleOnChangeFacturaForm}
            handleChecked={handleChecked}
          />
        </DialogBox>

        <DropzoneDialog
          acceptedFiles={[".xml"]}
          cancelButtonText={"cancelar"}
          submitButtonText={"subir XML"}
          filesLimit={1}
          maxFileSize={5000000}
          open={openFile}
          onClose={() => setOpenFile(false)}
          onSave={(files) => {
            console.log("Files:", files);
            setXml(files);
            setOpenFile(false);
          }}
          showPreviews={true}
          showFileNamesInPreview={true}
        />

        <DropzoneDialog
          acceptedFiles={[".pdf"]}
          cancelButtonText={"cancelar"}
          submitButtonText={"subir PDF"}
          filesLimit={1}
          maxFileSize={5000000}
          open={openPDF}
          onClose={() => setOpenPDF(false)}
          onSave={(files) => {
            console.log("Files:", files);
            setPdf(files);
            setOpenPDF(false);
          }}
          showPreviews={true}
          showFileNamesInPreview={true}
        />
      </Container>
    </React.Fragment>
  );
};

export default AtenderSolicitud;
