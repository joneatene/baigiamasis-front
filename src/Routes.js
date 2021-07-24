import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import TimelinePage from "./pages/TimelinePage/TimelinePage";

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/timeline" component={TimelinePage} />
      <Route exact path="/profile" component={ProfilePage} />
    </Switch>
  </Router>
);

export default Routes;
