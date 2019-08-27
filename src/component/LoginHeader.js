import React, { Component } from "react";
import styles from "../component/LoginHeader.module.css";
import Image from "./Image";
import image1 from "../img/c7dpEnXWzGMe.png";
import { Link } from "react-router-dom";
export default class LoginHeader extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.ImageHolder}>
          <div className={styles.Logo}>
            <Image image={image1} size="cover" />
          </div>
        </div>
        <div className={styles.Navigate}>
          <Link to="/Findaride">
            <div className={styles.navLabel}>Find a ride</div>
          </Link>
          <Link to="/Offeraride">
            <div className={styles.navLabel}>Offer a ride</div>
          </Link>
          <Link to="/Signup">
            <div className={styles.navLabel}>SignUp</div>
          </Link>
          <Link to="/Login">
            <div className={styles.navLabel}>Login</div>
          </Link>
        </div>
      </div>
    );
  }
}
