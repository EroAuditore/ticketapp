import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const styles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 350,
    height: 40,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 3,
  },
  divider: {
    height: 10,
    margin: 4,
  },
}));

const findTextCustom = (props) => {
  return (
    <Button variant="contained" color="primary">
      Guardar
    </Button>
  );
};

export default findTextCustom;
