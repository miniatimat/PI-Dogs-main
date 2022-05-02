import axios from "axios"

export function getBreeds(){
    return async function (dispatch){
        let json = await axios.get("/dogs")
        return dispatch({
            type: "GET_BREEDS",
            payload: json.data
        })
    }
}

export function filterBreedsByTemperament (payload){
    return {
        type: "FILTER_BY_TEMPERAMENT",
        payload
    }
}

export function filterBreedsBySource(payload){
    return{
        type: "FILTER_BY_SOURCE",
        payload
    }
}

export function orderByName(payload){
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}

export function orderByWeight(payload){
    return {
        type: "ORDER_BY_WEIGHT",
        payload
    }
}

export function getBreedByName(name){
    return async function(dispatch){
        try{
            let json = await axios.get("/dogs/?name="+ name)
            return dispatch({
                type: "GET_BREED_BY_NAME",
                payload: json.data
            })
        }
        catch (err){
            console.log(err)
        }
    }
}

export function getTemperaments(){
    return async function (dispatch){
        try{
            let json = await axios.get("/temperaments")
            return dispatch({
                type: "GET_TEMPERAMENTS",
                payload: json.data
            })
        }
        catch (err){
            console.log(err)
        }
    }
}

export function postBreed(payload){
    return async function (){
        return await axios.post("/dogs", payload)
    }
}

export  function getDetails(name){
    return async function (dispatch){
        try{
            let json = await axios.get("/dogs/"+ name)
            return dispatch({
                type: "GET_DETAILS",
                payload: json.data
                })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export function cleanDetail(){
    return {
        type: "CLEAN_DETAIL",
        payload: {}
    }
}


export function cleanBreeds(){
    return {
        type: "CLEAN_BREEDS",
        payload:{}
    }
}

export function deleteBreed(name){
    return async function (dispatch){
        try{
            const json = await axios.delete("/delete/" + name)
            return dispatch({
                type: "DELETE_BREED",
                payload: json.data
            })
        }
        catch (err){
            console.log(err)
        }
    }
}

