import React, { Component } from "react";
import styles from "./Button.module.css";
export default class Button extends Component {
  render() {
    return (
      <button
        className={
          this.props.borderRadius === "20px"
            ? this.props.color === "black"
              ? styles.button
              : styles.saveButton
            : styles.ButtonContainer
        }
      >
        {this.props.children}
      </button>
    );
  }
}
