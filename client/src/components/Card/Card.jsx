import React from "react";
import styles from "./Card.module.css"
import {Link} from "react-router-dom";

function Card({name, img, temperaments = "", minWeight, maxWeight = minWeight}){
    const temperamentList = temperaments.split(", ")
    return (
        <div className={styles.card}>
                <div className={styles.cardContainer}>
                    <p className={styles.cardName}> {name}</p>
                    <img className={styles.cardImg} src={img} alt="No Image Available"/>
                    <p className={styles.cardWeight}>{minWeight} - {maxWeight} KG</p>
                    <div className={styles.cardTemperaments}>
                        Temperaments: {temperamentList.join(", ")}
                    </div>
                </div>
        </div>
    )
}
export default Card