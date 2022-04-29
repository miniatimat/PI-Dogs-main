const axios = require("axios")
const {API_KEY} = process.env

function capitalize (str){
    return str.charAt(0).toUpperCase()+str.slice(1)
}

const getApiData = async ()=>{
    try{
        const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds/`)
        const allBreeds = apiUrl.data

        const breedData = await Promise.all(
            allBreeds.map( async (b) =>{
                return {
                    id: b.id,
                    name: b.name,
                    height: b.height.metric,
                    weight: b.weight.metric,
                    lifespan: b.life_span,
                    image: b.image,
                    temperaments: b.temperament,
                }
            })
        )
        return breedData
    }
    catch (error){
        console.log(error)
    }
}

module.exports = getApiData;