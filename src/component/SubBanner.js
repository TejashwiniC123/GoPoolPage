import React, { Component } from "react";
import styles from "./SubBanner.module.css";
import Image from "./Image";
import Button from "./Button";
export default class SubBanner extends Component {
  render() {
    return (
      <div>
        {this.props.imagePosition === 1 ? (
          <div className={styles.subBanner}>
            <div className={styles.RectLeft}>
              <div className={styles.imageHolder}>
                <Image image={this.props.image} size="cover" />
              </div>
            </div>
            <div className={styles.RectRight}>
              <div className={styles.ShortTripText}>{this.props.heading}</div>

              <div className={styles.TextContent}>{this.props.content}</div>
              <div className={styles.offerRideButton}>
                <Button color="black">{this.props.button}</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.subBanner}>
            <div className={styles.RectRight}>
              <div className={styles.ShortTripText}>{this.props.heading}</div>

              <div className={styles.TextContent}>{this.props.content}</div>
              <div className={styles.offerRideButton}>
                <Button color="black">{this.props.button}</Button>
              </div>
            </div>
            <div className={styles.RectLeft}>
              <div className={styles.imageHolder}>
                <Image image={this.props.image} size="cover" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
