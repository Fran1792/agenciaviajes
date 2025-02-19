export const sugerirDestino = (req, res) => {
    try {


        // Lista de destinos (sin base de datos)
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

        // Seleccionar destino aleatorio
        const destinoAleatorio = destinos[Math.floor(Math.random() * destinos.length)];



        // Renderizar la vista destino.pug con el destino seleccionado
        res.render("destino", { destino: destinoAleatorio });
    } catch (error) {
        console.error("❌ Error en sugerirDestino:", error);
        res.status(500).send("Error al sugerir destino.");
    }
};
