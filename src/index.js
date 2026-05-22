// Importa dotenv
// Sirve para cargar variables desde el archivo .env
import dotenv from "dotenv";

// Importa la aplicación Express
import app from "./app.js";

// Importa la conexión a la base de datos
import sequelize from "./config/database.js";

// Carga las variables del archivo .env
dotenv.config();

// Guarda el puerto definido en el .env
const PORT = process.env.PORT;

// ==========================
// FUNCIÓN PRINCIPAL
// ==========================
async function main() {
  try {

    // Intenta conectarse a MySQL
    await sequelize.authenticate();

    // Mensaje de conexión exitosa
    console.log("MySQL connected");

    // Sincroniza los modelos con la base de datos
    //
    // alter: true
    // Actualiza las tablas automáticamente
    // según los modelos definidos
    await sequelize.sync({ alter: true });

    // Mensaje de sincronización exitosa
    console.log("Tables synchronized");

    // Inicia el servidor
    app.listen(PORT, () => {

      // Mensaje cuando el servidor inicia
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {

    // Muestra cualquier error en consola
    console.log(error);
  }
}

// Ejecuta la función principal
main();