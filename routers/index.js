import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViajes,
    guardarTestimonios
} from "../controllers/paginaController.js";
import Destino from '../models/destino.js';

const router = express.Router();  // Solo crear el router, no `app`

// Definir rutas principales
router.get("/", paginaInicio);
router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes);
router.get("/testimonios", paginaTestimonios);
router.get("/viajes/:slug", paginaDetalleViajes);

router.get("/viajes/:slug", async (req, res) => {
    try {
        const { slug } = req.params;
        const viaje = await Viaje.findOne({ where: { slug } });

        if (!viaje) {
            return res.redirect("/viajes");
        }

        res.render("viaje", {
            titulo: viaje.titulo,
            resultado: viaje
        });
    } catch (error) {
        console.log(error);
    }
});

router.post("/testimonios", guardarTestimonios);

// Nueva funcionalidad: Sugerencia de Destino usando el modelo
router.post("/destino", async (req, res) => {
    try {
        // Obtener un destino aleatorio desde la base de datos
        const destinos = await Destino.findAll();  // Obtén todos los destinos desde la base de datos
        const destinoAleatorio = destinos[Math.floor(Math.random() * destinos.length)];  // Selecciona uno aleatorio

        if (!destinoAleatorio) {
            return res.status(404).send("No hay destinos disponibles.");
        }

        // Renderizar la vista con el destino aleatorio
        res.render("destino", { destino: destinoAleatorio.nombre });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al sugerir un destino.");
    }
});

// Exportar solo el router, no `app.use(router)`
export { router };

