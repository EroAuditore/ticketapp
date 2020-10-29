import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Tabs,
  Tab,
} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import { DropzoneDialog } from "material-ui-dropzone";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import FacturaGenView from "./FacturaGenView";
import {
  startUploadXML,
  startVXML,
  startUploadPDF,
  startAFAM,
  startProcess,
} from "./../../../Redux/Actions/facturas";
import { facturaGenSelector } from "../../../Redux/Selectors";
import { getCurrentUserID } from "./../../../Services/usersService";
import TabPanel from "./../../Common/TabPanel";
import MovimientosPTable from "./MovimientosPTable";
import AlertForm from "./../../Common/AlertForm";
import MovimientoFormView from "./MovimientoFormView";
import FacturaTempView from "./FacturaTempView";
import { processSelector } from "./../../../Redux/Selectors/index";
import FilesFactura from "./FilesFactura";

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
  button: {
    margin: theme.spacing(1),
  },
}));

const FacturaGenerar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [xml, setXml] = useState([]);
  const [pdf, setPdf] = useState([]);
  const [factura, setFactura] = useState({});
  const [movimiento, setMovimiento] = useState({});
  const [openFile, setOpenFile] = React.useState(false);
  const [openPDF, setOpenPDF] = React.useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [alertState, setAlertState] = useState(false);

  const data = useSelector((state) => facturaGenSelector(state));
  const { idMovimiento } = data;

  const OnUploadXML = () => {
    setFactura({ ...data, userId: getCurrentUserID() });
    setOpenFile(true);
  };

  const OnUploadPDF = () => {
    setFactura({ ...data, userId: getCurrentUserID() });
    setOpenPDF(true);
  };

  useEffect(() => {
    console.log("lenght", xml.length);
    /*console.log( ( &&xml));*/
    if (xml.length > 0) dispatch(startVXML({ ...factura, Archivo: xml }));
  }, [xml]);

  useEffect(() => {
    console.log("lenght", pdf.length);
    /*console.log( ( &&xml));*/
    if (pdf.length > 0) dispatch(startUploadPDF({ ...factura, Archivo: pdf }));
  }, [pdf]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleTake = () => {
    dispatch(startAFAM(movimiento));
    setAlertState(!alertState);
  };

  const toggleTake = (row) => {
    setMovimiento(row);
    setAlertState(!alertState);
  };

  const doUploadXML = () => {
    if (xml.length > 0) dispatch(startUploadXML({ ...factura, Archivo: xml }));
  };

  const processState = useSelector((state) => processSelector(state));
  const handleProcess = () => {
    dispatch(startProcess());
  };
  const handleDownloadClick = (item) => {
    /*window.open(filesURL + item._id, "blank");*/
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.paperTitle}>
            <h2>Facturación</h2>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            aria-label="Movimientos tab"
            value={activeTab}
            onChange={handleChange}
          >
            <Tab label="Factura" />
            <Tab label="Movimiento" />
            <Tab label="Archivo" />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <TabPanel value={activeTab} index={0}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Card>
                  <CardHeader title="Información capturada" />
                  <CardContent>
                    <FacturaGenView />
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<CloudUploadIcon />}
                      onClick={() => OnUploadXML()}
                      size="small"
                    >
                      Cargar XML
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={5}>
                <Card>
                  <CardHeader title="Datos XML" />
                  <CardContent>
                    <FacturaTempView />
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<CloudUploadIcon />}
                      onClick={() => doUploadXML()}
                      size="small"
                    >
                      Guardar XML
                    </Button>
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<CloudUploadIcon />}
                      onClick={() => OnUploadPDF()}
                      size="small"
                    >
                      Guardar PDF
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <Grid item md={8}>
              <Card>
                <CardContent>
                  {idMovimiento && <MovimientoFormView />}
                  {!idMovimiento && (
                    <MovimientosPTable toggleTake={toggleTake} />
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Paper></Paper>
            </Grid>
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            <FilesFactura
              handleDownloadClick={(item) => handleDownloadClick(item)}
            />
          </TabPanel>
        </Grid>
      </Grid>

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

      <AlertForm
        alertState={alertState}
        handleClose={toggleTake}
        handleTake={handleTake}
        title={"Asignar movmiento"}
      >
        {"Deseas asignar el movimiento a la factura?"}
      </AlertForm>

      <AlertForm
        alertState={processState}
        handleClose={handleProcess}
        handleTake={handleProcess}
        title={"Documento guardado"}
      >
        {"Se ha guardado el documento"}
      </AlertForm>
    </React.Fragment>
  );
};

export default FacturaGenerar;
