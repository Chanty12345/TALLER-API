// Importa Express
// Express sirve para crear el servidor backend y las rutas API
import express from "express";

// Importa CORS
// Permite que otros dominios puedan consumir la API
import cors from "cors";

// Importa Morgan
// Morgan muestra las peticiones HTTP en la consola
import morgan from "morgan";

// Importa las rutas de categorías
import categoryRouter from "./routers/category.router.js";

// Importa las rutas de productos
import productRouter from "./routers/product.router.js";

// Crea la aplicación de Express
const app = express();

// ==========================
// MIDDLEWARES
// ==========================

// Habilita CORS
app.use(cors());

// Muestra logs de las peticiones en consola
// "dev" es un formato corto y fácil de leer
app.use(morgan("dev"));

// Permite recibir datos JSON en las peticiones
// Ejemplo: req.body
app.use(express.json());

// ==========================
// RUTAS
// ==========================

// Todas las rutas de categorías
// empezarán con /api/categories
//
// Ejemplo:
// GET /api/categories
// POST /api/categories
app.use("/api/categories", categoryRouter);

// Todas las rutas de productos
// empezarán con /api/products
//
// Ejemplo:
// GET /api/products
// POST /api/products
app.use("/api/products", productRouter);

// Exporta la app para usarla en server.js
export default app;