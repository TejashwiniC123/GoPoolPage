import React, { Component } from "react";
import styles from "./SubBanner.module.css";
import Image from "./Image";
import Button from "./Button";
import { Link } from "react-router-dom";
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
                {this.props.button === "SignUp for free" ? (
                  <Link to="/Signup">
                    <Button color="black" borderRadius="20px">
                      {this.props.button}
                    </Button>
                  </Link>
                ) : (
                  <Link to="/Offeraride">
                    <Button color="black" borderRadius="20px">
                      {this.props.button}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.subBanner}>
            <div className={styles.RectRight}>
              <div className={styles.ShortTripText}>{this.props.heading}</div>

              <div className={styles.TextContent}>{this.props.content}</div>
              <div className={styles.offerRideButton}>
                <Button color="black" borderRadius="20px">
                  {this.props.button}
                </Button>
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
