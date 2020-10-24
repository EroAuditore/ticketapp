import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Router,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "./Components/Layout/Layout";
import Depositos from "./Components/Depositos";
import Tickets from "./Components/Tickets";
import Facturas from "./Components/Facturas";
import Retornos from "./Components/Retornos";

import store from "./Redux/store";
import TicketNew from "./Components/Tickets/TicketNew";
import LoginHome from "./Components/Login/LoginHome";
import Settings from "./Components/Settings/Settings";
import NuevoUsuario from "./Components/Settings/NuevoUsuario";
import EditarUsuario from "./Components/Settings/EditarUsuario";
import history from "./history";
import Atender from "./Components/Facturas/Atender/Atender";
import Solicitud from "./Components/Facturas/Solicitud";
import NuevaSolicitud from "./Components/Facturas/Solicitud/NuevaSolicitud";
import TicketAtencion from "./Components/Tickets/Atender/TicketAtencion";
import AtenderSolicitud from "./Components/Facturas/Atender/AtenderSolicitud";
import FacturaGenerar from "./Components/Facturas/Atender/FacturaGenerar";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/theme";
import Agentes from "./Components/AgenteClientes/Agentes";
import Clientes from "./Components/AgenteClientes/Clientes";

const Root = (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/clientes" component={Clientes} />
            <Route path="/agentes" component={Agentes} />
            <Route path="/tickets/atender" component={TicketAtencion} />
            <Route path="/tickets/nuevo" component={TicketNew} />

            <Route path="/tickets" component={Tickets} />
            <Route path="/depositos/:idItem" component={Depositos} />
            <Route path="/depositos" component={Depositos} />
            <Route path="/settings/editar/:idItem" component={EditarUsuario} />
            <Route path="/settings/nuevo" component={NuevoUsuario} />
            <Route path="/settings" component={Settings} />
            <Route path="/factura/generar" component={FacturaGenerar} />
            <Route path="/facturas/atender" component={AtenderSolicitud} />
            <Route
              path="/facturas/solicitud/nueva"
              component={NuevaSolicitud}
            />
            <Route path="/facturas/solicitud" component={Solicitud} />
            <Route path="/facturas" component={Facturas} />
            <Route path="/retornos" component={Retornos} />

            <Route path="/" component={LoginHome} />
            <Redirect to="/depositos" />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById("root"));
