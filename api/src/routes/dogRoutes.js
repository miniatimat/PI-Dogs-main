
const {Dog, Temperament} = require("../db");
const {Router} = require("express")
const {getAllData} = require("./dataRoutes/allData")

const router = Router()


router.get("/dogs", async (req,res)=> {
    //Returns all dog breeds. Or 1 breed in particular if it receives a name via query
    const {name} = req.query
    const breeds = await getAllData()
    try{
        if(name){
            const breedName = breeds.filter(b => b.name.toLowerCase() === name.toLowerCase())
            res.status(200).send(breedName)
        } else{
            const tempBreeds = breeds.filter(breed=> breed.temperaments)
            tempBreeds.map(b => {
                const temperamentList = b.temperaments.split(", ")
                for (let i = 0; i<temperamentList.length; i++){
                    Temperament.findOrCreate({where: { name: temperamentList[i]}})
                }
            })
            res.status(200).send(breeds)
        }
    }
    catch (err){
        console.log(err)
    }
})

router.get("/dogs/:breed",  async (req, res)=>{
    //Returns all breeds that contain the string passed through parameters
    const {breed} = req.params
    try {
        const breeds = await getAllData()
        if(breed){
            const breedName = breeds.filter(b => b.name.toLowerCase().includes(breed.toLowerCase()) )
            if (breedName.length > 0){
                return res.status(200).send(breedName)
            }
            else{
                return res.status(404).send("Breed not found")
            }
        }
    }
    catch (err){
        console.log(err)
    }
})
router.post("/dogs", async (req, res)=>{
    //Creates dog via a Json file.
    const {name, height, weight, lifespan, img, temperaments} = req.body
    try {
        const newBreed = await Dog.create({name, height, weight, lifespan, img}
        )
        const temperamentList = temperaments.split(", ")
        for (let i = 0; i<temperamentList.length; i++){
            await Temperament.findOrCreate({where: {name: temperamentList[i]}})
        }
        res.send("New breed created")
    }
    catch (err){
        console.log(err)
    }
})



router.delete("/delete/:name", async (req, res)=>{
    const {name} = req.params
    try{
        if(name){
            await Dog.destroy({
                where: {name: name}
            })
        }
        return res.send("Breed deleted")
    }
    catch (err){
        console.log(err)
    }
})

module.exports = router