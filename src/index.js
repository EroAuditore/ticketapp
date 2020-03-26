import React, { Component } from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Depositos from "./Components/Depositos/Depositos";

const Root = (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/depositos" component={Depositos} />
        <Route path="/depositos/:idItem" component={Depositos} />
        <Redirect to="/depositos" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById("root"));
