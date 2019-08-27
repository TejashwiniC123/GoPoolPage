import React, { Component } from "react";
import FindRideHeader from "./FindRideHeader";
import FindRidePage from "./FindRidePage";
export default class Findaride extends Component {
  render() {
    return (
      <div>
        <FindRideHeader />
        <FindRidePage />
      </div>
    );
  }
}
