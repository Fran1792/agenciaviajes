import Destino from "../models/destino.js";

// Este controlador maneja la lógica de sugerir destinos
export const sugerirDestino = async (req, res) => {
    try {
        // Aquí obtenemos todos los destinos (puedes usar un modelo de base de datos)
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

        // Seleccionamos un destino aleatorio
        const destinoAleatorio = destinos[Math.floor(Math.random() * destinos.length)];

        // Pasamos el destino a la vista
        res.render('destino', { destino: destinoAleatorio });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al sugerir destino');
    }
};
