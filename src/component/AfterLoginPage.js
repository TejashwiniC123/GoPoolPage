import React, { Component } from "react";
import styles from "./Banner.module.css";
import Image from "./Image";
import Image2 from "../img/futuristic-1820728_960_720.jpg";
import Button from "../component/Button";
export default class AfterLoginPage extends Component {
  render() {
    return (
      <div className={styles.Banner}>
        <div className={styles.imageHolder}>
          <Image image={Image2} size="cover" />
        </div>
        <div className={styles.TextHeader}>
          <div className={styles.ImageInsideText}>
            Where do you want to go ?
          </div>
          <div className={styles.ImageInsideText1}>
            This will be the least expensive ride you have ever made.
          </div>
          <div className={styles.offerRideButton}>
            <Button color="white" borderRadius="20px">
              Offer a ride
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
