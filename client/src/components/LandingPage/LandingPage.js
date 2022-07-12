import React from "react";
import {Link} from "react-router-dom";
import styles from "./LandingPage.module.css"

export default function LandingPage(){
    return(
        <div className={styles.landingPage}>
            <div className={styles.welcomeText}>
                <p>Dog Facts</p>
            </div>

            <div className={styles.welcome}>
                <div/>
                <Link to="/dogs">
                    <button className={styles.enterButton}>Lets Go!</button>
                </Link>
            </div>
        </div>
    )
}