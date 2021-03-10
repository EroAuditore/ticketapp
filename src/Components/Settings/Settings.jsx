import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TableList from "./TableList";
import CustomTextBox from "./../Common/CustomTextBox";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Button,
  Container,
  Grid,
  Paper,
} from "@material-ui/core";
import { getUsers, searchUser } from "./../../Services/usersService";
import { useDispatch } from "react-redux";
import { startEditUsers } from "../../Redux/Actions/users";

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

const Settings = () => {
  const classes = useStyles();
  const [dataUsers, setDataUsers] = useState([]);
  const [filterText, setFilterText] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAdd = () => {
    history.push("/settings/nuevo");
  };

  const handleFilterClick = () => {
    const findObj = { filterText: filterText };
    filterUsers(findObj);
  };

  const handleFiltertextChange = (e) => {
    setFilterText(e.target.value);
  };

  const usuariosData = async () => {
    try {
      const result = await getUsers();
      setDataUsers(result.data);
    } catch (e) {
      console.log("No se pudo cargar los usuarios :(", e);
    }
  };

  const filterUsers = async (findObj) => {
    try {
      const result = await searchUser(findObj);
      setDataUsers(result.data);
    } catch (e) {
      console.log("No se pudo cargar los usuarios", e);
    }
  };

  const handleEdit = (usr) => {
    dispatch(startEditUsers(usr));
    history.push(`settings/editar/${usr.id_usuario}`);
  };

  useEffect(() => {
    usuariosData();
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.paperTitle}>
              <h2>Usuarios</h2>
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
          <Grid item xs></Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <TableList data={dataUsers} onEdit={(usr) => handleEdit(usr)} />
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Settings;
