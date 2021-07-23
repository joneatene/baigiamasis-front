import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/timeline" />
    </Switch>
  </Router>
);

export default Routes;
