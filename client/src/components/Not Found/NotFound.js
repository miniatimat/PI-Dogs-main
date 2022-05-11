import React from "react";
import styles from "./NotFound.module.css"

export default function NotFound(){
  return(
      <div className={styles.notFoundContainer}>
        <div className={styles.notFound}>
          No Match Found 😥.
        </div>
      </div>
  )
}