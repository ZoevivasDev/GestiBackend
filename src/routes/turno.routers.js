const express = require('express');
const router = express.Router();
const turnoController = require('../controllers/turno.controller'); 

//GET: http://localhost:3000/api/turnos
router.get('/', turnoController.obtenerTodos);

//POST: http://localhost:3000/api/turnos
router.post('/', turnoController.crear);

module.exports = router;