import React, { Component } from "react";
import "./App.css";
import HomePage from "./component/HomePage";
import SignupHeader from "./component/SignupHeader";
import { Route, Link, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/register" component={SignupHeader} />
      </BrowserRouter>
    );
  }
}
