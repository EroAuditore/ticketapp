import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Layout from "./Components/Layout/Layout";
import Depositos from "./Components/Depositos";
import Tickets from "./Components/Tickets";

import store from "./Redux/store";
import TicketNew from "./Components/Tickets/TicketNew";
import LoginHome from "./Components/Login/LoginHome";

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/tickets/nuevo" component={TicketNew} />
          <Route path="/tickets" component={Tickets} />
          <Route path="/depositos/:idItem" component={Depositos} />
          <Route path="/depositos" component={Depositos} />
          <Route path="/" component={LoginHome} />
          <Redirect to="/depositos" />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
