import Sequelize from 'sequelize';

const db = new Sequelize('fjmorcilloa01_agenciaviajes', 'alumno', 'AlumnoSanz$1',{
    host: 'iasanz.synology.me',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: true,
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 100000
    },
});
export default db;