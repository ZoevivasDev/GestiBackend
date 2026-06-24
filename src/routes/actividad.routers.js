const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividad.controller');

//GET: http://localhost:3000/api/actividades
router.get('/', actividadController.obtenerTodas);

//POST: http://localhost:3000/api/actividades
router.post('/', actividadController.crear);


router.delete('/:id', actividadController.eliminar);

module.exports = router;