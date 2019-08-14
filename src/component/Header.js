import React, { Component } from 'react'
import styles from "./Header.module.css"
import Image from "./Image"
import image1 from "../img/c7dpEnXWzGMe.png";
export default class Header extends Component {
    render() {
        return (
            <div className={styles.Header}>
            <div className={styles.Logo}>
                <Image image={image1} size="cover" />
            </div>
            <div className={styles.Login}>Login</div>
                 <div className={styles.SignUp}>Sign up</div>
                 <div className={styles.Offer}>Offer a ride</div>
                 <div className={styles.Ride}>Find a ride</div>
            </div>
     
       
                
        )
    }
}
