import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Image from "./Image";

import image1 from "../component/img/c7dpEnXWzGMe.png";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.ImageHolder}>
          <div className={styles.Logo}>
            <Image image={image1} size="cover" />
          </div>
        </div>
        <div className={styles.Navigate}>
          <div className={styles.navLabel}>Find a ride</div>
          <div className={styles.navLabel}>Offer a ride</div>
          <Link to="/register">
            <div className={styles.navLabel}>Sign up</div>
          </Link>

          <div className={styles.navLabel}>Login</div>
        </div>
      </div>
    );
  }
}
