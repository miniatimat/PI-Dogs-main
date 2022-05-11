const {Dog, Temperament} = require("../../db")

const getDbData = async ()=>{
    try{
        const dbBreeds = await Dog.findAll({
            include: {
                model: Temperament,
                attributes: ["name"],
                through: { attributes: [] }
            },
        });
        const dbJson = dbBreeds.map(b => b.toJSON())
        const dbTemperaments = dbJson.map(b=>{
            const temperament = b.temperaments.map(t => [t.name])
            return{...b, temperaments: temperament.join(", ")}
            }
        )
        return dbTemperaments
    }
    catch (err){
        console.log(err)
    }
}

module.exports = getDbData