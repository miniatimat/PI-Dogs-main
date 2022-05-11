import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {getBreedByName, cleanBreeds} from "../../redux/actions";
import styles from "./SearchBar.module.css"

function SearchBar(){
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(cleanBreeds())
    dispatch(getBreedByName(name))
    setName("")
  }

  return(
      <div className={styles.searchBarContainer}>
        <input className={styles.searchBarInput} value={name} type="text" placeholder="Search Breeds" onChange={(e)=> handleInputChange(e) }/>
        <button id="btnSearch" className={styles.searchBarContainer} type="submit" onClick={e=> handleSubmit(e)} disabled={name === ""}> <div className={styles.searchText}> Search</div> </button>
      </div>
  )
}

export default SearchBar