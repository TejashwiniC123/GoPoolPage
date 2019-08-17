import React, { Component } from 'react'
import styles from "./OfferButtonwithblack.module.css"
export default class Button extends Component {
    render() {
        return (
        
            <div className={styles.offerRide}>
            <button className={this.props.color==="white"?styles.offerRide:styles.offerButtonwithblack}>{this.props.children}</button>
            </div>
            
        )
    }
}


  