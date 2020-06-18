import React, { useState } from "react";
import styles from "./style";
import Joi from "joi-browser";
import { login } from "./../../Services/login";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import jwtDecode from "jwt-decode";

const LoginHome = () => {
  const classes = styles();
  const [data, setData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors({ errors: errors || {} });
    if (errors) return;

    doSubmit();
  };

  const handleLogin = () => {
    const errorsObj = validate();

    setErrors(errorsObj || {});
    console.log("errorshandleLogin", errors);
    if (Object.keys(errors).length === 0) doSubmit();
  };

  const doSubmit = async () => {
    try {
      const { data: jwt } = await login(data.username, data.password);
      const {
        data: { Area },
      } = jwtDecode(jwt);
      console.log("user", Area);
      localStorage.setItem("token", jwt);

      /*window.location = "/tickets";*/
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setErrors({ username: ex.response.data["error"] });
      }
    }
  };

  const validate = () => {
    const { error } = Joi.validate(data, schema, {
      abortEarly: false,
    });
    if (!error) return null;

    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    console.log(Object.keys(errors).length === 0 ? null : errors);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaObj = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaObj, { abortEarly: true });
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errorsObj = { ...errors };

    const errorMessage = validateProperty(input);
    if (errorMessage) errorsObj[input.name] = errorMessage;
    else delete errorsObj[input.name];

    setData((data) => ({ ...data, [input.name]: input.value }));
    setErrors(errorsObj);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Card className={classes.cardContainer}>
          <Grid container className={classes.titleGridContainer} spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography className={classes.title}>Bienvenido</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                error={errors["username"] ? true : false}
                id="username"
                name="username"
                label="Username"
                helperText={errors["username"]}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                error={errors["password"] ? true : false}
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                helperText={errors["password"]}
                onChange={handleChange}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
              >
                Iniciar
              </Button>
            </Grid>
          </Grid>
        </Card>
      </form>
    </Container>
  );
};

export default LoginHome;
