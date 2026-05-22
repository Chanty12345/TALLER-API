// Importa la clase Sequelize desde la librería sequelize
// Sequelize sirve para conectarse y trabajar con bases de datos SQL usando JavaScript
import { Sequelize } from "sequelize";

// Importa dotenv para poder leer variables de entorno desde el archivo .env
import dotenv from "dotenv";

// Carga las variables del archivo .env al process.env
dotenv.config();

// Crea una nueva conexión a la base de datos
const sequelize = new Sequelize(
  
  // Nombre de la base de datos
  process.env.DB_NAME,

  // Usuario de la base de datos
  process.env.DB_USER,

  // Contraseña de la base de datos
  process.env.DB_PASSWORD,

  {
    // Dirección del servidor donde está la base de datos
    host: process.env.DB_HOST,

    // Tipo de base de datos que se está usando
    // En este caso MySQL
    dialect: "mysql",

    // Puerto por donde se conecta MySQL
    port: process.env.DB_PORT,
  }
);

// Exporta la conexión para poder usarla en otras partes del proyecto
export default sequelize;