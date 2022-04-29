const {Dog, Temperament} = require("../../db")

const getDbData = async ()=>{
    try{
        const dbBreeds = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: [],
                through: { attributes: [] }
            },
            raw: true
        });
        return dbBreeds
    }
    catch (err){
        console.log(err)
    }
}

module.exports = getDbData