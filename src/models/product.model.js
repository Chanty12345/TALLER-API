// Importa los tipos de datos de Sequelize
// DataTypes permite definir el tipo de cada columna
import { DataTypes } from "sequelize";

// Importa la conexión a la base de datos
import sequelize from "../config/database.js";

// Define el modelo Product
// Este modelo representa la tabla "products"
const Product = sequelize.define(
  "Product",
  {
    // ==========================
    // ID DEL PRODUCTO
    // ==========================
    id: {

      // Tipo entero
      type: DataTypes.INTEGER,

      // Llave primaria
      primaryKey: true,

      // Incremento automático
      autoIncrement: true,
    },

    // ==========================
    // NOMBRE DEL PRODUCTO
    // ==========================
    name: {

      // Texto corto
      type: DataTypes.STRING,

      // Campo obligatorio
      allowNull: false,
    },

    // ==========================
    // DESCRIPCIÓN
    // ==========================
    description: {

      // Texto largo
      type: DataTypes.TEXT,
    },

    // ==========================
    // PRECIO DEL PRODUCTO
    // ==========================
    price: {

      // Número decimal:
      // 10 dígitos en total y 2 decimales
      type: DataTypes.DECIMAL(10, 2),

      // Campo obligatorio
      allowNull: false,
    },

    // ==========================
    // STOCK DEL PRODUCTO
    // ==========================
    stock: {

      // Número entero
      type: DataTypes.INTEGER,

      // Valor inicial por defecto
      defaultValue: 0,
    },

    // ==========================
    // URL DE LA IMAGEN
    // ==========================
    image_url: {

      // Guarda la URL de la imagen
      type: DataTypes.STRING,
    },

    // ==========================
    // ID DE LA CATEGORÍA
    // ==========================
    category_id: {

      // Tipo entero
      type: DataTypes.INTEGER,

      // Campo obligatorio
      allowNull: false,
    },

    // ==========================
    // ESTADO DEL PRODUCTO
    // ==========================
    status: {

      // Solo permite estos valores:
      // active, inactive, out_of_stock
      type: DataTypes.ENUM(
        "active",
        "inactive",
        "out_of_stock"
      ),

      // Valor por defecto
      defaultValue: "active",
    },
  },
  {
    // Nombre real de la tabla en MySQL
    tableName: "products",

    // Activa createdAt y updatedAt
    timestamps: true,

    // Renombra createdAt
    createdAt: "created_at",

    // Renombra updatedAt
    updatedAt: "updated_at",
  }
);

// Exporta el modelo Product
export default Product;