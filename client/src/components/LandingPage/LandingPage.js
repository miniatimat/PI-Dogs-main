import React from "react";
import {Link} from "react-router-dom";
import styles from "./LandingPage.module.css"

export default function LandingPage(){
    return(
        <div className={styles.landingPage}>
            <div className={styles.welcomeText}>
                <h1>Welcome</h1>
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