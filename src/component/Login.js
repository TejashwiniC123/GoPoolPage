import React, { Component } from "react";
import LoginHeader from "./LoginHeader";
import LoginPage from "./LoginPage";
export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginHeader />
        <LoginPage />
      </div>
    );
  }
}
