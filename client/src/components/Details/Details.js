import React, {useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDetails, cleanDetail, cleanBreeds, deleteBreed} from "../../redux/actions";
import styles from "./Details.module.css"
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

  return (
      <div className={styles.detailsPage}>
        <nav className={styles.exitSearchAndCreateNav}/>
        <div>
          <Link to="/dogs">
            <h1 className={styles.back} onClick={()=>handleClick()}> 🏠 Home</h1>
          </Link>
        </div>
        {
          breed.length > 0 ? <div className={styles.detailsContainer}>
            <div className={styles.details}>
              <h2 className={styles.detailsName}> {breed[0].name}</h2>
              <h3 className={styles.detailsName}>Weight: {breed[0].minWeight} - {breed[0].maxWeight} KG </h3>
              <h3 className={styles.detailsName}>Height: {breed[0].minHeight} - {breed[0].maxHeight} cm</h3>
              <h3 className={styles.detailsName}>Lifespan {breed[0].shortLifespan} - {breed[0].longLifespan} Years</h3>
              <img src={breed[0].image} alt="Not found"/>
              <div>
                Temperaments: {breed[0].temperaments}
              </div>
            </div>

              </div>
            : <Loading/>
        }
      </div>
  )
}

export default Details