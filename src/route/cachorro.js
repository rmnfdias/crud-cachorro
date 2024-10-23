const express = require('express')
const ControllerCachorro = require("../controller/cachorro")

//inicializando as rota do express

const router = express.Router()

//criando as rotas

router.get('/', ControllerCachorro.GetCachorro)
router.post('/', ControllerCachorro.CreateCachorro)
router.put('/:id', ControllerCachorro.UpdateCachorro)
router.delete('/:id', ControllerCachorro.DeleteCachorro)

//Exportar as rotas
module.exports = router