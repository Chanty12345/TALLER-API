// Importa los modelos Product y Category
// Product representa la tabla de productos
// Category representa la tabla de categorías
import { Product, Category } from "../models/index.js";

// ==========================
// OBTENER TODOS LOS PRODUCTOS
// ==========================
export const getProducts = async (req, res) => {
  try {

    // Busca todos los productos
    const products = await Product.findAll({

      // Incluye la relación con la categoría
      include: {
        model: Category, // Modelo relacionado
        as: "category",  // Alias definido en la relación
      },
    });

    // Respuesta exitosa con los productos
    res.status(200).json(products);

  } catch (error) {

    // Error interno del servidor
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// OBTENER PRODUCTO POR ID
// ==========================
export const getProductById = async (req, res) => {
  try {

    // Busca un producto por su ID
    const product = await Product.findByPk(req.params.id, {

      // Incluye la categoría relacionada
      include: {
        model: Category,
        as: "category",
      },
    });

    // Si no encuentra el producto
    if (!product) {

      // Retorna error 404
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Devuelve el producto encontrado
    res.status(200).json(product);

  } catch (error) {

    // Error interno del servidor
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// CREAR PRODUCTO
// ==========================
export const createProduct = async (req, res) => {
  try {

    // Crea un nuevo producto usando los datos enviados
    const product = await Product.create(req.body);

    // Devuelve el producto creado
    res.status(201).json(product);

  } catch (error) {

    // Error interno del servidor
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// ACTUALIZAR PRODUCTO
// ==========================
export const updateProduct = async (req, res) => {
  try {

    // Busca el producto por ID
    const product = await Product.findByPk(req.params.id);

    // Si el producto no existe
    if (!product) {

      // Retorna error 404
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Actualiza el producto con los nuevos datos
    await product.update(req.body);

    // Devuelve el producto actualizado
    res.status(200).json(product);

  } catch (error) {

    // Error interno del servidor
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// ELIMINAR PRODUCTO
// ==========================
export const deleteProduct = async (req, res) => {
  try {

    // Busca el producto por ID
    const product = await Product.findByPk(req.params.id);

    // Si no existe
    if (!product) {

      // Retorna error 404
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Elimina el producto de la base de datos
    await product.destroy();

    // Mensaje de éxito
    res.status(200).json({
      message: "Product deleted successfully",
    });

  } catch (error) {

    // Error interno del servidor
    res.status(500).json({
      message: error.message,
    });
  }
};