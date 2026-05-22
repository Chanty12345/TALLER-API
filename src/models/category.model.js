// Importa los tipos de datos de Sequelize
// DataTypes permite definir los tipos de columnas de la tabla
import { DataTypes } from "sequelize";

// Importa la conexión a la base de datos
import sequelize from "../config/database.js";

// Define el modelo Category
// Este modelo representa la tabla "categories" en la base de datos
const Category = sequelize.define(
  "Category",
  {
    // ==========================
    // ID DE LA CATEGORÍA
    // ==========================
    id: {
      // Tipo entero
      type: DataTypes.INTEGER,

      // Llave primaria
      primaryKey: true,

      // Se incrementa automáticamente
      autoIncrement: true,
    },

    // ==========================
    // NOMBRE DE LA CATEGORÍA
    // ==========================
    name: {

      // Tipo texto corto
      type: DataTypes.STRING,

      // No permite valores nulos
      allowNull: false,
    },

    // ==========================
    // DESCRIPCIÓN
    // ==========================
    description: {

      // Tipo texto largo
      type: DataTypes.TEXT,
    },

    // ==========================
    // URL DE LA IMAGEN
    // ==========================
    image_url: {

      // Guarda la URL de una imagen
      type: DataTypes.STRING,
    },

    // ==========================
    // ID DE CATEGORÍA PADRE
    // ==========================
    parent_id: {

      // Tipo entero
      type: DataTypes.INTEGER,

      // Puede ser null
      // Sirve para categorías hijas/subcategorías
      allowNull: true,
    },

    // ==========================
    // ESTADO DE LA CATEGORÍA
    // ==========================
    status: {

      // Solo permite dos valores:
      // "active" o "inactive"
      type: DataTypes.ENUM("active", "inactive"),

      // Valor por defecto
      defaultValue: "active",
    },
  },
  {
    // Nombre real de la tabla en MySQL
    tableName: "categories",

    // Activa createdAt y updatedAt
    timestamps: true,

    // Renombra createdAt a created_at
    createdAt: "created_at",

    // Renombra updatedAt a updated_at
    updatedAt: "updated_at",
  }
);

// Exporta el modelo para usarlo en otras partes del proyecto
export default Category;