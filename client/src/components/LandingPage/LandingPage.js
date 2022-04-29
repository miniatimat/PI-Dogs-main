import React from "react";
import {Link} from "react-router-dom";
import styles from "./LandingPage.modules.css"

export default function LandingPage(){
    return(
        <div className={styles.landingPage}>
            <div className={styles.welcomeText}>
                <h1>Welcome</h1>
            </div>
            <h1 className={styles.casePhone}> I'm Sorry, I am not avalable in mobile yet. Please access from a computer</h1>
            <div className={styles.welcome}>
                <div className={styles.image}/>
                <Link to="/home">
                    <button className={styles.enterButton}>...</button>
                </Link>
            </div>
        </div>
    )
}