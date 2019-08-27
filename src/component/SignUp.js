import React, { Component } from "react";
import SignupHeader from "./SignupHeader";
import SignupPage from "./SignupPage";
export default class SignUp extends Component {
  render() {
    return (
      <div>
        <SignupHeader />
        <SignupPage />
      </div>
    );
  }
}
