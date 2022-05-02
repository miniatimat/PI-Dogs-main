import React, {useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetails, cleanDetail, cleanBreeds, deleteBreed} from "../../redux/actions";
import styles from "./Details.modules.css"
import Loading from "../Loading/Loading";

function Details (){
  const breed = useSelector(state => state.detail)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {name} = useParams()

  useEffect(()=>{
    dispatch(getDetails(name))}
        ,[dispatch, name]
  )

  function handleClick(){
    dispatch(cleanDetail())
    dispatch(cleanBreeds())
  }

  const password = "delete"

  function handleDelete(){
    if (breed[0].sourceDb){
      if (Window.promp("Password: ") === password){
        dispatch(deleteBreed(name))
        dispatch(cleanDetail())
        dispatch(cleanBreeds())
        alert("Breed Deleted")
        navigate("/dogs")
      } else alert("Wrong Password")
    }
    else alert("You can't delete this breed")
  }

  return (
      <div className={styles.detailsPage}>
        <nav className={styles.exitSearchAndCreateNav}/>
        <div className={styles.backContainer}>
          <Link to="/dogs">
            <h1 className={styles.back} onClick={()=>handleClick()}>Home</h1>
          </Link>
        </div>
        {
          breed.length > 0 ? <div className={styles.detailsContainer}>
            <button className={styles.pokemonDelete} onClick={()=> handleDelete()}>Delete</button>
            <div className={styles.details}>
              <h2 className={styles.detailsName}> {breed[0].name}</h2>
              <h2 className={styles.detailsName}> {breed[0].img}</h2>
              <h2 className={styles.detailsName}> {breed[0].weight}</h2>
              <h2 className={styles.detailsName}> {breed[0].height}</h2>
              <img src={breed[0].image.url}/>
              <div>
                Temperaments: {breed[0].temperaments.split(", ").map(t => <div key={t}>{t}</div>)}
              </div>
            </div>

              </div>
            : <Loading/>
        }
      </div>
  )
}

export default Details