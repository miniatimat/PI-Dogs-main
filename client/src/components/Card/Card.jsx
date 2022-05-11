import React from "react";
import styles from "./Card.module.css"

function Card({name, img, temperaments = "", minWeight, maxWeight = minWeight}){
    const temperamentList = temperaments.split(", ")
    return (
        <div className={styles.card}>
            <div className={styles.cardContainer}>
                <h3 className={styles.cardName}> {name}</h3>
                <img className={styles.cardImg} src={img} alt="No Image Available"/>
                <h4 className={styles.cardWeight}>{minWeight} - {maxWeight} KG</h4>
                <div className={styles.cardTemperaments}>
                    Temperaments: {temperamentList.join(", ")}
                </div>
            </div>
        </div>
    )
}
export default Card