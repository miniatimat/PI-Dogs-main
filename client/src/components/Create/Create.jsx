import React,{useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getTemperaments, postBreed, cleanBreeds, cleanDetail, getBreeds} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Create.module.css"

function Create(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
//  const temperaments = useSelector(state => state.temperaments)
  const [err, setErr] = useState({})
  const breedsCheck = useSelector(state => state.allBreeds)

  const [input, setInput] = useState({
    name: "",
    minHeight: "",
    maxHeight:"",
    minWeight: "",
    maxWeight: "",
    shortLifespan: "",
    longLifespan: "",
    img: "",
    temperaments: ""
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    setErr(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  const password = "create"

  function handleSubmit(e) {
    if(window.prompt('Password:') === password) {
      e.preventDefault();
      console.log(input)
      dispatch(postBreed(input))
      alert('Breed added successfully.')
      setInput({
        name: "",
        minHeight: "",
        maxHeight:"",
        minWeight: "",
        maxWeight: "",
        shortLifespan: "",
        longLifespan: "",
        img: "",
        temperaments: ""
      })
      dispatch(cleanBreeds());
      dispatch(cleanDetail());
      navigate('/dogs');
    } else alert('Password incorrect.');
  }

  useEffect(()=> {
    dispatch(getBreeds())
    dispatch(getTemperaments())
    dispatch(cleanBreeds())},
    [dispatch]
  )

  function validate(input){
    let errors = {};
    let existent = false;
    breedsCheck.map(b => b.name === input.name ? existent = true: null);
    if (existent) {
      errors.name = 'That Breed already exists.'
    }
    if (!/^[a-zA-Z]+$/.test(input.name) ) {
      errors.name = 'Only letters are accepted';
    }
    if (!input.name) {
      errors.name = 'Name required';
    }
    if (!input.minHeight) {
      errors.minHeight = 'Minimum Height Required';
    }
    if (!input.maxHeight) {
      errors.maxHeight = 'Maximum Height Required';
    }
    if (input.maxHeight < input.minHeight){
      errors.maxHeight = "Maximum Height should be higher than Minimum Height"
    }
    if (!input.minWeight) {
      errors.minWeight = 'Minimum Weight Required';
    }
    if(!input.maxWeight){
      errors.maxWeight = "Maximum Weight Required"
    }

    if (input.maxWeight < input.minWeight){
      errors.maxWeight = "Maximum Weight should be higher than Minimum Weight"
    }

    if (!input.image){
    errors.image = "Image Link Required"
    }
    if (!input.temperaments){
      errors.temperaments = "Temperaments required"
    }
    if (!input.shortLifespan){
      errors.shortLifespan = "Minimum Lifespan Required"
    }
    if(!input.longLifespan){
      errors.longLifespan = "Maximum Lifespan Required"
    }
    if (input.longLifespan < input.shortLifespan){
      errors.longLifespan = "Long Lifespan should be higher than Short Lifespan"
    }
    return errors
  }

  return(
      <div className={styles.createPage}>
        <nav className={styles.exitSearchAndCreateNav}>
          <div >
            <Link to="/dogs">
              <h1 className={styles.back}>🏠 Home</h1>
            </Link>
          </div>
        </nav>

        <div className={styles.createContainer}>
          <div className={styles.create}>
            <h1> Add New Breed</h1>
            <form onSubmit={(e)=> handleSubmit(e)} autoComplete="off">

              <div className={styles.inputContainer}>
                <label>Name: </label>
                <input type='text' value={input.name} name='name' placeholder='Name' onChange={handleChange} className={styles.input} required />
                <span>{err.name && (<p className='error'>{err.name}</p>)}</span>
              </div>

              <div className={styles.inputPair}>
                <label> Height: </label>
                <div className={styles.inputContainer}>
                  <input type='text' value={input.minHeight} name='minHeight' placeholder='Minimum Height' onChange={handleChange} className={styles.input} required />
                  <span>{err.minHeight && (<p className='error'>{err.minHeight}</p>)}</span>
                </div>
                -
                <div className={styles.inputContainer}>
                  <input type='text' value={input.maxHeight} name='maxHeight' placeholder='Maximum Height' onChange={handleChange} className={styles.input} required />
                  <span>{err.maxHeight && (<p className='error'>{err.maxHeight}</p>)}</span>
                </div>
              </div>

              <div className={styles.inputPair}>
                <label>Weight: </label>
                <div className={styles.inputContainer}>
                  <input type='text' value={input.minWeight} name='minWeight' placeholder='Minimum Weight' onChange={handleChange} className={styles.input} required />
                  <span>{err.minWeight && (<p className='error'>{err.minWeight}</p>)}</span>
                </div>
                -
                <div className={styles.inputContainer}>
                  <input type='text' value={input.maxWeight} name='maxWeight' placeholder='Maximum Weight' onChange={handleChange} className={styles.input} required />
                  <span>{err.maxWeight && (<p className='error'>{err.maxWeight}</p>)}</span>
                </div>
              </div>

              <div className={styles.inputPair}>
                <label>Lifespan: </label>
                <div className={styles.inputContainer}>
                  <input type='text' value={input.shortLifespan} name='shortLifespan' placeholder=' Short Lifespan' onChange={handleChange} className={styles.input} required />
                  <span>{err.shortLifespan && (<p className='error'>{err.shortLifespan}</p>)}</span>
                </div>
                -
                <div className={styles.inputContainer}>
                  <input type='text' value={input.longLifespan} name='longLifespan' placeholder=' Long Lifespan' onChange={handleChange} className={styles.input} required />
                  <span>{err.longLifespan && (<p className='error'>{err.longLifespan}</p>)}</span>
                </div>

              </div>
              <div className={styles.inputContainer}>
                <label>Image: </label>
                <input type='text' value={input.img} name="img" placeholder='Link to Image' onChange={handleChange} className={styles.input} />
                <img src={input.img} alt=""/>
                <span>{err.img && (<p className='error'>{err.img}</p>)}</span>
              </div>

              <div className={styles.inputContainer}>
                <label>Temperaments: </label>
                <input type='text' value={input.temperaments} name='temperaments' placeholder='Temperaments' onChange={handleChange} className={styles.input} required />
                <span>{err.temperaments && (<p className='error'>{err.temperaments}</p>)}</span>
              </div>


              <button className={styles.submitButton} type="submit" disabled={ err.name || err.longLifespan || err.shortLifespan || err.img || err.minWeight || err.maxWeight|| err.minHeight || err.maxHeight }> Add Breed</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Create