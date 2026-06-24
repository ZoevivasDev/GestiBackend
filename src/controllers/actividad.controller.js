// actividad.controller.js
const Actividad = require('../models/actividad.model');
const Turno = require('../models/turno.model'); 

class ActividadController {

  async obtenerTodas(req, res) {
    try {
      // Traemos actividades y sus turnos relacionados en una sola consulta
      const actividades = await Actividad.find().lean();
      const actividadesConTurnos = await Promise.all(
        actividades.map(async (act) => {
          const turnos = await Turno.find({ actividadId: act._id }).lean();
          return { ...act, turnos };
        })
      );
      res.status(200).json(actividadesConTurnos);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Error al traer actividades', error: error.message });
    }
  }

  async crear(req, res) {
    try {
      const { nombre, turno } = req.body; // 👈 AHORA LEEMOS turno TAMBIÉN

      if (!nombre) {
        return res.status(400).json({ status: 'error', message: 'El nombre es obligatorio' });
      }

      // Busca la actividad o la crea si no existe
      let actividad = await Actividad.findOne({ nombre });
      if (!actividad) {
        actividad = await new Actividad({ nombre }).save();
      }

      // Si vino un turno en el payload, lo creamos vinculado a esa actividad
      let nuevoTurno = null;
      if (turno && turno.horario && turno.profesor) {
        nuevoTurno = await new Turno({
          actividadId: actividad._id,
          horario: turno.horario,
          profesor: turno.profesor,
          limiteAlumnos: turno.limiteAlumnos || 10
        }).save();
      }

      res.status(201).json({
        status: 'success',
        data: { actividad, turno: nuevoTurno }
      });

    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Error al crear la actividad', error: error.message });
    }
  }

  async eliminar(req, res) {
  try {
    const { id } = req.params;
    await Actividad.findByIdAndDelete(id);
    await Turno.deleteMany({ actividadId: id }); // borra los turnos vinculados también
    res.status(200).json({ status: 'success', message: 'Actividad eliminada' });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
}



}

module.exports = new ActividadController();