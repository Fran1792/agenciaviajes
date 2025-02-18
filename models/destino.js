import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const destino = db.define('destino', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default destino;
