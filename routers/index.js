import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViajes,
    guardarTestimonios
} from "../controllers/paginaController.js";
import { sugerirDestino } from "../controllers/destinoController.js"; // Importa el controlador correcto

const router = express.Router();  // Crear el router

// Definir rutas principales
router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/testimonios", paginaTestimonios);
router.get("/viajes/:slug", paginaDetalleViajes);

// Ruta para guardar testimonios
router.post("/testimonios", guardarTestimonios);

// Nueva funcionalidad: Sugerencia de Destino (sin base de datos)
router.post("/destino", sugerirDestino); // Usa el controlador correcto

// Exportar solo el router
export { router };
