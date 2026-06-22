const Actividad = require('../models/actividad.model');

class ActividadController {
  
  // OBTENER TODAS LAS ACTIVIDADES (GET)
  async obtenerTodas(req, res) {
    try {
      const actividades = await Actividad.find();
      res.status(200).json(actividades);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Error al traer actividades', error: error.message });
    }
  }

  // CREAR NUEVA ACTIVIDAD (POST)
  async crear(req, res) {
    try {
      const { nombre } = req.body;

      if (!nombre) {
        return res.status(400).json({ status: 'error', message: 'El nombre es obligatorio' });
      }

      const existeActividad = await Actividad.findOne({ nombre });
      if (existeActividad) {
        return res.status(400).json({ status: 'error', message: 'Esta actividad ya existe' });
      }

      const nuevaActividad = new Actividad({ nombre });
      await nuevaActividad.save();
      
      res.status(201).json({ status: 'success', data: nuevaActividad });
    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Error al crear la actividad', error: error.message });
    }
  }
}

module.exports = new ActividadController();