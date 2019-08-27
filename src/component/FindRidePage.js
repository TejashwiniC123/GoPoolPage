import React, { Component } from "react";
import styles from "../component/FindRidePage.module.css";
import Image from "../component/Image";
import logo from "../img/futuristic-1820728_960_720.jpg";
import logo1 from "../img/facebook.png";
import logo2 from "../img/google-plus.png";
import logo3 from "../img/social-linkedin-circular-button.png";
import ImageWithInput from "../component/ImageWithInput";
import logo7 from "../img/facebook-placeholder-for-locate-places-on-maps.png";
import Button from "../component/Button";
export default class FindRidePage extends Component {
  render() {
    return (
      <div className={styles.Signuppage}>
        <div className={styles.ImageHolder}>
          <Image image={logo} />
          <div className={styles.SignupAccount}>
            <div className={styles.IconsWithCreateAccount}>
              <div className={styles.AccountText}>Sign In</div>

              {/* <div className={styles.SocialMediaIcons}>
                <Image image={logo1} />
              </div>
              <div className={styles.SocialMediaIcons}>
                <Image image={logo2} />
              </div>
              <div className={styles.SocialMediaIcons}>
                <Image image={logo3} />
              </div>
              <div className={styles.SignInbyEmail}>or</div>
              <div className={styles.SignInbyEmail}>
                use your email for signup
              </div> */}
            </div>
            <div className={styles.inputContainer}></div>

            <div className={styles.inputContainer}></div>
            <ImageWithInput
              Icon={logo7}
              type="text"
              placeholder="Leaving From"
              border="none"
            />
            <div className={styles.inputContainer}></div>
            <ImageWithInput
              Icon={logo7}
              type="text"
              placeholder="Going To"
              border="none"
            />
            <div className={styles.LineWithText}>
              <div className={styles.LineContainer}></div>
            </div>
            <div className={styles.DateWithTime}>
              <div className={styles.DateText}>Date and Time</div>
              <div className={styles.TimeText}>Today 17:00</div>
            </div>

            <div className={styles.ButtonContainer}>
              <Button Color="white" borderRadius="0px">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
