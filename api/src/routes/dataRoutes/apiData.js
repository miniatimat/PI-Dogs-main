const axios = require("axios")
const {API_KEY} = process.env

function capitalize (str){
    return str.charAt(0).toUpperCase()+str.slice(1)
}

const getApiData = async ()=>{
    try{
        const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key={API_KEY}`)
        const allBreeds = apiUrl.data

        const breedData = await Promise.all(
            allBreeds.map( async (b) =>{
                const heights = b.height.metric.split(" ")
                const weights = b.weight.metric.split(" ")
                const lifespans = b.life_span.split(" ")

                return {
                    id: b.id,
                    name: b.name,
                    minHeight: parseInt(heights[0]),
                    maxHeight: parseInt(heights[2]),
                    minWeight: parseInt(weights[0]),
                    maxWeight: parseInt(weights[2]),
                    shortLifespan: parseInt(lifespans[0]),
                    longLifespan: parseInt(lifespans[2]),
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