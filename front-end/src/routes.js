import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Pages/Home/index"
import Login from "./Pages/Login/index"

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;