import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getBreeds, cleanBreeds, cleanDetail, deleteBreed, filterBreedsBySource, filterBreedsByTemperament, getDetails, getTemperaments, getBreedByName, orderByName, orderByWeight, postBreed} from "../../redux/actions";
import styles from "./Home.modules.css"
import Card from "../Card/Card";








//To Do: Pagination, SearchBar, Loader, NotFound