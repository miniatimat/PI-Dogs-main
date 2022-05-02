import React from "react";
import styles from "./Loading.modules.css"

export default function Loading(){
  return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>
          <img src="NoLoadingGif" alt="Gif"/>
          <h1> Loading ...</h1>
        </div>
      </div>
  )
}