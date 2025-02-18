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

const sugerirDestino = (req, res) => {
    const destinoAleatorio = destinos[Math.floor(Math.random() * destinos.length)];
    res.render('destino', { destino: destinoAleatorio });
};

export { sugerirDestino };
