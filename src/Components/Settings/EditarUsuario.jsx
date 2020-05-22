import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  TableContainer,
  Button,
  Container,
  Grid,
  Paper,
  makeStyles,
} from "@material-ui/core";
import UsuarioForm from "./UsuarioForm";
import ModulosForm from "./ModulosForm";
import { editUser } from "./../../Services/usersService";
import { userSelector } from "../../Redux/Selectors";

const useStyles = makeStyles((theme) => ({
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

const EditarUsuario = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const [usrData, setUsrData] = useState({
    nombre: "",
    userName: "",
    password: "",
    area: "",
    activo: true,
    movimientos: false,
    retornos: false,
    facturas: false,
    depositos: false,
    configuracion: false,
  });
  const handleChange = (event) => {
    setUsrData({ ...usrData, [event.target.name]: event.target.value });
  };

  const handleChecked = (event) => {
    setUsrData({ ...usrData, [event.target.id]: event.target.checked });
  };

  const handleSave = async () => {
    try {
      const result = await editUser(usrData);

      if (result.status === 200) {
        console.log(result);
        history.push("/settings");
      }
    } catch (e) {
      console.log("Error al guardar", e);
    }
  };

  const data = useSelector((state) => userSelector(state));

  useEffect(() => {
    setUsrData({
      ID_usuario: data.ID_usuario,
      nombre: data.Nombre,
      userName: data.Username,
      password: data.Password,
      area: data.Area,
      activo: Boolean(Number(data.activo)),
      movimientos: Boolean(Number(data.movimientos)),
      retornos: Boolean(Number(data.retornos)),
      facturas: Boolean(Number(data.facturacion)),
      depositos: Boolean(Number(data.depositos)),
      configuracion: Boolean(Number(data.configuracion)),
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <h2>Editar Usuario</h2>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <UsuarioForm
              handleChange={handleChange}
              handleChecked={handleChecked}
              onSave={handleSave}
              data={usrData}
            />
          </Grid>
          <Grid item md={5} xs={12}>
            <ModulosForm
              onChange={handleChange}
              data={usrData}
              handleChecked={handleChecked}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default EditarUsuario;
