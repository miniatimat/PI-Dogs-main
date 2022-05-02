import React from "react";
import styles from "./Card.modules.css"

function Card({name, img, temperaments = "", weight}){
    const temperamentList = temperaments.split(", ")
    return (
        <div className={styles.card}>
            <div className={styles.cardContainer}>
                <h3 className={styles.cardName}> {name}</h3>
                <img className={styles.cardImg} src={img} alt="Image not found"/>
                <h4 className={styles.cardWeight}>{weight}</h4>
                <div>
                    Temperaments: {
                    temperamentList.map(t => <li key={t}>{t}</li>)}
                </div>
            </div>
        </div>
    )
}
export default Card