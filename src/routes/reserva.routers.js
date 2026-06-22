const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/reserva.controller');

// Definimos los endpoints del CRUD mapeados con sus métodos HTTP 
router.get('/', ReservaController.obtenerTodas);   // GET http://localhost:3000/api/reservas
router.post('/', ReservaController.crear);         // POST http://localhost:3000/api/reservas
router.delete('/:id', ReservaController.eliminar); // DELETE http://localhost:3000/api/reservas/ID_DE_LA_RESERVA

module.exports = router;