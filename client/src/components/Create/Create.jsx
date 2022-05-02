import React,{useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getTemperaments, postBreed, cleanBreeds, cleanDetail, getBreeds} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Create.modules.css"

function Create(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const temperaments = useSelector(state => state.temperaments)
  const [err, setErr] = useState({})
  const breedsCheck = useSelector(state => state.allBreeds)

  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
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
      dispatch(postBreed(input))
      alert('Breed added successfully.')
      setInput({
        name: "",
        height: "",
        weight: "",
        lifespan: "",
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
    dispatch(cleanBreeds()),
    [dispatch]
  })

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
    if (!input.height) {
      errors.height = 'Height required';
    }
    if (!input.weight) {
      errors.weight = 'Weight required';
    }
    if (!input.image){
    errors.image = "Image Link Required"
    }
    if (!input.temperaments){
      errors.temperaments = "Temperaments required"
    }
    if (!input.lifespan){
      errors.lifespan = "Lifespan Required"
    }
    return errors
  }

  return(
      <div className={styles.createPage}>
        <nav className={styles.exitSearchAndCreateNav}>
          <div className={styles.backHomeContainer}>
            <Link to="/dogs">
              <h1 className={styles.back}>Home</h1>
            </Link>
          </div>
        </nav>

        <div className={styles.createContainer}>
          <div className={styles.create}>
            <h1> Add new Breed</h1>
            <form onSubmit={(e)=> handleSubmit(e)} autoComplete="off">

              <div className={styles.inputContainer}>
                <label>Name: </label>
                <input type='text' value={input.name} name='name' placeholder='Name' onChange={handleChange} className={styles.input} required />
                <span>{err.name && (<p className='error'>{err.name}</p>)}</span>
              </div>

              <div className={styles.inputContainer}>
                <label>Height: </label>
                <input type='text' value={input.height} name='height' placeholder='Height' onChange={handleChange} className={styles.input} required />
                <span>{err.height && (<p className='error'>{err.height}</p>)}</span>
              </div>

              <div className={styles.inputContainer}>
                <label>Weight: </label>
                <input type='text' value={input.weight} name='weight' placeholder='Weight' onChange={handleChange} className={styles.input} required />
                <span>{err.weight && (<p className='error'>{err.weight}</p>)}</span>
              </div>

              <div className={styles.inputContainer}>
                <label>Lifespan: </label>
                <input type='text' value={input.lifespan} name='lifespan' placeholder='Lifespan' onChange={handleChange} className={styles.input} required />
                <span>{err.lifespan && (<p className='error'>{err.lifespan}</p>)}</span>
              </div>

              <div className={styles.inputContainer}>
                <label>Image: </label>
                <input type='text' value={input.img} name="img" placeholder='Link to Image' onChange={handleChange} className={styles.input} required />
                <img src={input.img} alt=""/>
                <span>{err.img && (<p className='error'>{err.img}</p>)}</span>
              </div>

              <button className={styles.submitButton} type="submit" disabled={err.name || err.lifespan || err.img || err.weight || err.height === ""}> Add Breed</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Create