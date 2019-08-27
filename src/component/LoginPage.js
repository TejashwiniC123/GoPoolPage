import React, { Component } from "react";
import styles from "../component/LoginPage.module.css";
import Image from "../component/Image";
import logo from "../img/futuristic-1820728_960_720.jpg";
import logo1 from "../img/facebook.png";
import logo2 from "../img/google-plus.png";
import logo3 from "../img/social-linkedin-circular-button.png";
import ImageWithInput from "../component/ImageWithInput";
import logo5 from "../img/envelope.png";
import logo6 from "../img/locked-padlock.png";
import Button from "../component/Button";
import { Link } from "react-router-dom";
export default class LoginPage extends Component {
  render() {
    return (
      <div className={styles.Signuppage}>
        <div className={styles.ImageHolder}>
          <Image image={logo} />
          <div className={styles.SignupAccount}>
            <div className={styles.IconsWithCreateAccount}>
              <div className={styles.AccountText}>Sign In</div>

              <div className={styles.SocialMediaIcons}>
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
                use your email for signIn
              </div>
            </div>
            <div className={styles.inputContainer}></div>

            <div className={styles.inputContainer}></div>
            <ImageWithInput
              Icon={logo5}
              type="text"
              placeholder="Email"
              border="none"
            />
            <div className={styles.inputContainer}></div>
            <ImageWithInput
              Icon={logo6}
              type="text"
              placeholder="Password"
              border="none"
            />
            <div className={styles.inputContainer}></div>
            <div className={styles.ButtonContainer}>
              <Button Color="white" borderRadius="0px">
                Sign In
              </Button>
            </div>
            <div className={styles.HaveAccountText}>
              already have an account?
            </div>
            <Link to="/Signup">
              <div className={styles.LoginNow}>SignUp now</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
