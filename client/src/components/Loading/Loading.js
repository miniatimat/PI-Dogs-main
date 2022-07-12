import React from "react";
import styles from "./Loading.module.css"
import loading from "./running.jpg"

export default function Loading(){
  return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>
          <img src={loading} alt="Gif"/>
        </div>
      </div>
  )
}