import { DataTypes } from 'sequelize';
import db from '../config/db.js'; // Asegúrate de tener la conexión a la base de datos correctamente importada

// Definir el modelo Destino
const Destino = db.define('Destino', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Destino; // Exporta el modelo con la mayúscula inicial
