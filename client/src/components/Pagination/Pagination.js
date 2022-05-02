import React, {useState} from "react";
import styles from "./Pagination.modules.css"

function Pagination ({breedsPerPage, allBreeds, pagination, currentPage, setCurrentPage}){
  const pageNumbers = []
  const [input, setInput] = useState(currentPage)
  const max = allBreeds/breedsPerPage

  for (let i= 0; i < Math.ceil(max); i++){
    pageNumbers.push(i)
  }
  function nextPage(){
    setCurrentPage(currentPage + 1)
    setInput(input -1)
  }
  function previousPage(){
    setCurrentPage(currentPage -1)
    setInput(input -1) //Check if it is +1
  }
  return(
      <nav className={styles.paginationContainer}>
        <ul className={styles.paginationUlContainer}>
          <button onClick={previousPage} className={ styles.prev} disabled={currentPage === 1 || currentPage < 1}>{"<"}</button>
          {pageNumbers && pageNumbers.map(n => (
              <li className={currentPage === n ? styles.activeNumber : styles.desactiveNumber} key={n} onClick={()=> pagination(n)}>
                {n}<h1>.</h1>
              </li>
          ))}
          <button onClick={nextPage} className={ styles.next} disabled={currentPage === Math.ceil(max) || currentPage > Math.ceil(max)}>{">"}</button>
        </ul>

      </nav>
  )
}

export default Pagination