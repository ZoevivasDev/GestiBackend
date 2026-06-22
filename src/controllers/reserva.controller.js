// Importamos el modelo que creaste (asegurate de que la ruta coincida)
const Reserva = require('../models/reserva.model');

class ReservaController {
  
  // OBTIENE TODAS LAS RESERVAS (Read - GET)
  async obtenerTodas(req, res) {
    try {
      // Usamos el método find() de Mongoose para traer todo de la DB
      const reservas = await Reserva.find(); 
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Error al obtener las reservas', error: error.message });
    }
  }

  // CREA UNA NUEVA RESERVA (Create - POST)
  async crear(req, res) {
    try {
      // Los datos que vienen desde el formulario de Angular (req.body)
      const nuevaReservaData = req.body;
      
      // Creamos una instancia del modelo con esos datos y la guardamos en Mongo
      const nuevaReserva = new Reserva(nuevaReservaData);
      await nuevaReserva.save();
      
      res.status(201).json({ status: 'success', data: nuevaReserva });
    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Error al crear la reserva', error: error.message });
    }
  }

  // ELIMINA UNA RESERVA (Delete - DELETE)
  async eliminar(req, res) {
    try {
      // Obtenemos el ID de la reserva que viene en la URL (req.params)
      const { id } = req.params;
      
      // Buscamos por ID y eliminamos de la base de datos
      const reservaEliminada = await Reserva.findByIdAndDelete(id);
      
      if (!reservaEliminada) {
        return res.status(404).json({ status: 'error', message: 'No se encontró la reserva con ese ID' });
      }
      
      res.status(200).json({ status: 'success', message: 'Reserva cancelada y eliminada con éxito' });
    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Error al eliminar la reserva', error: error.message });
    }
  }
}

// Exportamos una instancia para que el Router la pueda usar directamente
module.exports = new ReservaController();