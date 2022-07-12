import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBreeds, cleanBreeds, cleanDetail, filterBreedsBySource, filterBreedsByTemperament, getTemperaments, orderByName, orderByWeight} from "../../redux/actions";
import styles from "./Home.module.css"
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import NotFound from "../Not Found/NotFound";

function Home(){
  const dispatch = useDispatch()
  const breeds = useSelector((state) => state.breeds)
  const temperaments = useSelector((state)=> state.temperaments)
  const [currentPage, setCurrentPage] = useState(1)
  const breedsPerPage = 12
  const indexOfLastBreed = currentPage * breedsPerPage
  const indexOfFirstBreed = indexOfLastBreed - breedsPerPage
  const currentBreeds = breeds.slice(indexOfFirstBreed, indexOfLastBreed)
  const [order, setOrder] = useState("")

  const pagination = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  const load = useSelector(state => state.isLoading)

  useEffect(()=>{
    dispatch(getBreeds())
    dispatch(getTemperaments())
    dispatch(cleanDetail())
      },[dispatch])

  function handleClick(e){
    e.preventDefault()
    dispatch(cleanBreeds())
    dispatch(getBreeds())
    setCurrentPage(1)
  }

  function handleFilterTypes(e){
    e.preventDefault()
    dispatch(filterBreedsByTemperament(e.target.value))
    setCurrentPage(1)
  }

  function handleFilterBySource(e){
    e.preventDefault()
    dispatch(filterBreedsBySource(e.target.value))
    setCurrentPage(1)
  }

  function handleSortByName(e){
    e.preventDefault()
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }

  function handleSortByWeight(e){
    e.preventDefault()
    dispatch(orderByWeight(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }

  function handleClean(){
    dispatch(cleanBreeds())
  }

  return(
      <div className={styles.home}>
        <nav className={styles.exitSearchAndCreateNav}>
          <div className={styles.exitContainer}>
            <Link to="/"> <h1 className={styles.exit} onClick={handleClean}>EXIT</h1></Link>
          </div>

          <div className={styles.searchBarContainer}>
            <SearchBar/>
          </div>

          <div className={styles.createContainer}>
            <Link to="/dogs/create" > <h1 className={styles.create}> CREATE</h1></Link>
          </div>
        </nav>


        <div className={styles.filtersAndRefresh}>
          Filter By:
          <select className={styles.filter} onChange={e => handleFilterTypes(e)} value='disabled'>
            <option value=''>Temperament</option>
            <option className={styles.optionsSelect} value='all'>All Temperaments</option>
            {temperaments?.map((t) => (
                <option className={styles.optionsSelect} key={t.name} value={t.name}>{t.name}</option>
            ))}
          </select>

          <select className={styles.filter} onChange={e => handleFilterBySource(e)} value='disabled'>
            <option value=''>Source</option>
            <option className={styles.optionsSelect} value='all'>All</option>
            <option className={styles.optionsSelect} value='api'>API</option>
            <option className={styles.optionsSelect} value='created'>Created</option>
          </select>

          Sort By:

          <select className={styles.filter} onChange={e => handleSortByName(e)} value='disabled'>
            <option value=''>Name</option>
            <option className={styles.optionsSelect} value='asc'>A - Z</option>
            <option className={styles.optionsSelect} value='dsc'>Z - A</option>
          </select>

          <select className={styles.filter} onChange={e => handleSortByWeight(e)} value='disabled'>
            <option value='' > Weight</option>
            <option className={styles.optionsSelect} value='dsc'>Highest  </option>
            <option className={styles.optionsSelect} value='asc'> Lowest  </option>
          </select>

          <button className={styles.refreshButton} onClick={e => {handleClick(e)}}>
            <p className={styles.refreshText}>Refresh All</p>
          </button>

        </div>
        {<div className={styles.cardsContainer}>{
          load ? (<Loading/>):
              !breeds.length? (<NotFound/>):
                  currentBreeds?.map(b=>{
                    let image = b.image
                    if (image.url) image = image.url
                    console.log(b)
                    return (
                        <div key = {b.name}>
                          <Link to={"/dogs/"+ b.name} style={{textDecoration: 'none'}}>
                            <Card name={b.name} img={image} temperaments={b.temperaments} minWeight={b.minWeight} maxWeight={b.maxWeight}/>
                          </Link>
                        </div>
                    )
                  })
        }
      </div>}
        {
        load?(<Loading/>):
        <div className={styles.pagination}>
          {breeds.length >= 12 ?
              <Pagination breedsPerPage={breedsPerPage} allBreeds={breeds.length} pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            :null}
        </div>
        }
    </div>
  )
}

export default Home