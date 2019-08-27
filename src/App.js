import React, { Component } from "react";
import "./App.css";
import HomePage from "./component/HomePage";
import SignUp from "./component/SignUp";
import Findaride from "./component/Findaride";
import Offeraride from "./component/Offeraride";
import Login from "./component/Login";
import { Route, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/Findaride" component={Findaride} />
        <Route path="/Offeraride" component={Offeraride} />
        <Route path="/Signup" component={SignUp} />
        <Route path="/Login" component={Login} />
      </BrowserRouter>
    );
  }
}
