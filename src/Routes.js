import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage.jsx";
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route to={"/"} component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
};
