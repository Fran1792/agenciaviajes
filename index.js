import express from 'express';
import { router } from './routers/index.js';  // Asegúrate de que el router esté bien importado

import db from './config/db.js';  // Base de datos
import dotenv from 'dotenv';
dotenv.config();  // Cargar variables de entorno

const app = express();
const port = process.env.PORT || 4000;

// Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));

// Iniciar el servidor
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

// Habilitar Pug
app.set('view engine', 'pug');

// Middleware global
app.use((req, res, next) => {
    const year = new Date().getFullYear();
    res.locals.year = year;
    res.locals.nombreP = 'Agencia de Viajes';
    next();
});

// Definir la carpeta pública
app.use(express.static('public'));


// Usar el router importado
app.use("/", router);
