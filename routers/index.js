// routers/index.js
import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViajes,
    guardarTestimonios
} from "../controllers/paginaController.js";

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

// Nueva funcionalidad: Sugerencia de Destino
const destinos = [
    "París, Francia",
    "Tokio, Japón",
    "Río de Janeiro, Brasil",
    "Roma, Italia",
    "Bangkok, Tailandia",
    "Nueva York, EE.UU.",
    "Sídney, Australia",
    "El Cairo, Egipto"
];

router.post("/destino", (req, res) => {
    const destinoAleatorio = destinos[Math.floor(Math.random() * destinos.length)];
    res.render("destino", { destino: destinoAleatorio });
});

// Exportar solo el router, no `app.use(router)`
export { router };
