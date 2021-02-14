import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Footer from "./core/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
