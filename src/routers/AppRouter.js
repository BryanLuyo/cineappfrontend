import React from "react";
import { Header } from "../components/ui/header";
import { HomePage } from "../pages/home.page";
import { PeliculaPage } from "../pages/pelicula.page";
import { LoginPage } from "../pages/auth.login.page";
import { RegisterPage } from "../pages/auth.register.page";
import { CinePage } from "../pages/cine.page";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";




export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/peliculas" component={PeliculaPage} />
          <Route exact path="/cines" component={CinePage} />
          <Route exact path="/auth/login" component={LoginPage} />
          <Route exact path="/auth/register" component={RegisterPage} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
};
