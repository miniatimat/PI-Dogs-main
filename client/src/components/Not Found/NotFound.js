import React from "react";
import styles from "./NotFound.modules.css"

export default function NotFound(){
  return(
      <div className={styles.notFoundContainer}>
        <div className={styles.notFound}>
          <img src="NoSource" alt="GIF"/>
          <h1> Breed Not Found</h1>
        </div>
              </div>
  )
}