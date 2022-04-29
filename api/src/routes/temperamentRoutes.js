const { Temperament} = require("../db");
const {Router} = require("express")
const router = Router()

router.get("/temperaments", async (req, res)=>{
    const temperaments = await Temperament.findAll()
    return res.status(200).send(temperaments)
})

module.exports = router