const initialState ={
    breeds: [],
    allBreeds: [],
    temperaments: [],
    detail:[],
    isLoading: true
}

function rootReducer(state= initialState, action){
    switch (action.type){
        case "GET_BREEDS":{
            return{
                ...state,
                breeds: action.payload,
                allBreeds: action.payload,
                isLoading: false
            }
        }
        case "FILTER_BY_TEMPERAMENT":{

            if (action.payload === "all") {
                return {...state,
                    breeds: state.allBreeds}
            }
            return {
                ...state,
                breeds: state.allBreeds.filter(b=> b.temperaments.find(t=>t[0]=== action.payload))
            }
        }
        case "FILTER_BY_SOURCE":{
            const allBreeds = state.allBreeds
            if (action.payload === "created"){
                return {
                    ...state,
                    breeds: allBreeds.filter(b => b.dbSource)
                }
            }
            if (action.payload === "api"){
                return {
                    ...state,
                    breeds: allBreeds.filter(b=> !b.dbSource)
                }
            }
            return {
                state,
                breeds: allBreeds
            }
        }
        case "ORDER_BY_NAME":{
            let sorted = state.breeds
                if (action.payload === "asc"){
                    sorted = state.breeds.sort(function (a,b){
                        if (a.name > b.name) return 1
                        if (a.name < b.name) return -1
                        return 0
                    })

                }
            if (action.payload === "dsc"){
                sorted = state.breeds.sort(function (a,b){
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1
                    return 0
                })}
            return {
                ...state,
                dogs: sorted
            }
        }
        case "ORDER_BY_WEIGHT":{
            let sorted = state.breeds
            if (action.payload === "asc"){
                sorted = state.breeds.sort(function (a,b){
                    if (a.weight > b.weight) return 1
                    if (a.weight < b.weight) return -1
                    return 0
                })

            }
            if (action.payload === "dsc"){
                sorted = state.breeds.sort(function (a,b){
                    if (a.weight > b.weight) return -1
                    if (a.weight < b.weight) return 1
                    return 0
                })}
            return {
                ...state,
                dogs: sorted
            }
        }
        case "GET_BREED_BY_NAME":{
            return {
                ...state,
                breeds: action.payload,
                isLoading: false
            }
        }
        case "GET_TEMPERAMENTS":{
            return {
                ...state,
                temperaments: action.payload
            }
        }
        case "CREATE_BREED":{
            return {
                ...state
            }
        }
        case "GET_DETAILS":{
            return {
                ...state,
                detail: action.payload
            }
        }
        case "CLEAN_DETAIL":{
            return {
                ...state,
                detail: {}
            }
        }
        case "CLEAN_BREEDS":{
            return {
                ...state,
                isLoading: true
            }
        }
        case "DELETE_BREED":{
            return {
                ...state
            }
        }
        default: {return state}
    }
}

export default rootReducer