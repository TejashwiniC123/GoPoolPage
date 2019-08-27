import React, { Component } from "react";
import style from "./ImageWithInput.module.css";
import Image from "./Image";
export default class ImageWithInput extends Component {
  render() {
    return (
      <div className={style.inputContainer}>
        <div className={style.imageHolder}>
          <Image
            image={this.props.Icon}
            size="cover"
            borderRadius="50%"
            height="25px"
            width="100%"
          />
        </div>
        <div className={style.inputBox}>
          <input
            type={this.props.type}
            placeholder={this.props.placeholder}
            style={{ border: this.props.border }}
          />
        </div>
      </div>
    );
  }
}
