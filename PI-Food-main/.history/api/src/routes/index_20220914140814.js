const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Repice = require('./Repice')
const Diets = require('./Diets')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/repice',Repice)
router.use('/diets',Diets)

module.exports = router;
