const Turno = require('../models/turno.model');

class TurnoController {

  // OBTENER TODOS LOS TURNOS (GET)
  async obtenerTodos(req, res) {
    try {
      // Usamos populate por si en el Front querés mostrar los datos de la actividad vinculada
      const turnos = await Turno.find().populate('actividadId');
      res.status(200).json(turnos);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Error al obtener los turnos', error: error.message });
    }
  }
  
  // CREAR UN NUEVO TURNO DESDE EL ADMIN (POST)
  async crear(req, res) {
    try {
      const { actividadId, horario, profesor, limiteAlumnos } = req.body;

      if (!actividadId || !horario || !profesor) {
        return res.status(400).json({ status: 'error', message: 'Faltan campos obligatorios para planificar el turno' });
      }

      const nuevoTurno = new Turno({
        actividadId,
        horario,
        profesor,
        limiteAlumnos: limiteAlumnos || 10
      });

      await nuevoTurno.save();
      res.status(201).json({ status: 'success', data: nuevoTurno });
    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Error al planificar el turno', error: error.message });
    }
  }
}

module.exports = new TurnoController();