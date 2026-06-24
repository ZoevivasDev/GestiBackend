# 🗓️ Gesti Backend — API REST para Gestor de Turnos

Servidor backend para la aplicación Gesti, que expone una API REST para gestionar actividades, turnos y reservas.  
Desarrollado como Trabajo Práctico Integrador para la materia **Desarrollo de Sistemas Web (BackEnd)**.

Autora: **Zoe Vivas**

---

## 🚀 ¿Qué hace este servidor?

Expone una API REST que permite crear, leer, actualizar y eliminar actividades, turnos y reservas. Los datos se persisten en MongoDB Atlas usando Mongoose.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| Node.js | Entorno de ejecución |
| Express | Framework para el servidor y las rutas |
| MongoDB Atlas | Base de datos en la nube |
| Mongoose | ODM para modelar los datos |
| dotenv | Manejo de variables de entorno |
| CORS | Habilitación de peticiones desde el frontend |

---

## 📁 Estructura del proyecto

```
src/
├── app.js                      # Punto de entrada, configuración de Express y middlewares
├── config/
│   └── db.js                   # Conexión a MongoDB Atlas con Mongoose
├── controllers/
│   ├── actividad.controller.js # Lógica para gestionar actividades y turnos
│   ├── reserva.controller.js   # Lógica para gestionar reservas
│   └── turno.controller.js     # Lógica para gestionar turnos
├── models/
│   ├── actividad.model.js      # Esquema de Actividad en MongoDB
│   ├── reserva.model.js        # Esquema de Reserva en MongoDB
│   └── turno.model.js          # Esquema de Turno en MongoDB
└── routes/
    ├── actividad.routers.js    # Rutas del endpoint /api/actividades
    ├── reserva.routers.js      # Rutas del endpoint /api/reservas
    └── turno.routers.js        # Rutas del endpoint /api/turnos
```

---

## 📡 Endpoints disponibles

### Actividades
| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/actividades` | Obtener todas las actividades con sus turnos |
| POST | `/api/actividades` | Crear una actividad y su turno vinculado |
| DELETE | `/api/actividades/:id` | Eliminar una actividad y todos sus turnos |

### Turnos
| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/turnos` | Obtener todos los turnos |
| POST | `/api/turnos` | Crear un turno vinculado a una actividad |
| PUT | `/api/turnos/:id` | Editar horario, profesor o límite de alumnos |

### Reservas
| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/reservas` | Obtener todas las reservas |
| POST | `/api/reservas` | Crear una nueva reserva |
| DELETE | `/api/reservas/:id` | Cancelar una reserva |

---

## ⚙️ Cómo correr el proyecto

### Requisitos previos
- Node.js instalado
- Cuenta en MongoDB Atlas con un cluster creado

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/ZoevivasDev/GestiBackend.git

# 2. Instalar dependencias
npm install

# 3. Crear el archivo .env en la raíz con las variables necesarias
PORT=3000
MONGO_URI=tu_uri_de_mongodb_atlas

# 4. Correr el servidor en modo desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

---

## 🗄️ Modelos de datos

### Actividad
```js
{
  nombre: String  // nombre único de la disciplina
}
```

### Turno
```js
{
  actividadId: ObjectId, // referencia a la actividad
  horario: String,       // ej: "09:00 - 10:00"
  profesor: String,      // nombre del instructor
  limiteAlumnos: Number  // capacidad máxima (default: 10)
}
```

### Reserva
```js
{
  nombre: String,          // nombre del alumno
  apellido: String,        // apellido del alumno
  actividad: String,       // nombre de la actividad
  turnoTexto: String,      // horario y profesor del turno
  fechaFormateada: String  // fecha de la reserva (YYYY-MM-DD)
}
```

---

## 🔗 Frontend relacionado

Este backend fue desarrollado para consumirse desde la app **Gesti Frontend** construida en Angular.  
Repositorio del frontend: [GestiFrontend](https://github.com/ZoevivasDev/GestiBackend)
