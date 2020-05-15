import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

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

const CustomTextBox = (props) => {
  const { onClick, onChange } = props;
  const classes = styles();

  return (
    <Paper className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu"></IconButton>
      <InputBase
        className={classes.input}
        placeholder="Buscar..."
        inputProps={{ "aria-label": " buscar" }}
        onChange={onChange}
      />
      <Divider className={classes.divider} orientation="vertical" />

      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={onClick}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default CustomTextBox;
