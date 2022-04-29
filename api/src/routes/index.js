const { Router } = require('express');
const dogRoute = require("./dogRoutes")
const tempRoute = require("./temperamentRoutes")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", dogRoute)
router.use("/", tempRoute)


module.exports = router;
