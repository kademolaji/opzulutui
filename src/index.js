import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
 import "./assests/main.css";
// import "assets/demo/demo.css";
// import "perfect-scrollbar/css/perfect-scrollbar.css";

import MainLayout from "./layouts/MainLayout";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={(props) => <MainLayout {...props} />} />
      {/* <Redirect to="/admin/dashboard" /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
