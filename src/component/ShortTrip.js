import React, { Component } from 'react'
import styles from "./subBanner.module.css"
export default class ShortTrip extends Component {
    render() {
        return (
            <div>
            <div className={styles.MoreText}>{this.props.short} </div>    
            <div className={styles.MoreText2}>{this.props.short} </div>    
            </div>
        );
    }
}
