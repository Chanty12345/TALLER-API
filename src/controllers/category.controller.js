// Importa el modelo Category desde la carpeta models
// Este modelo representa la tabla categories en la base de datos
import { Category } from "../models/index.js";

// ==========================
// OBTENER TODAS LAS CATEGORÍAS
// ==========================
export const getCategories = async (req, res) => {
  try {

    // Busca todos los registros de la tabla categories
    const categories = await Category.findAll();

    // Responde con estado 200 (OK) y devuelve las categorías en formato JSON
    res.status(200).json(categories);

  } catch (error) {

    // Si ocurre un error, responde con estado 500
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// OBTENER CATEGORÍA POR ID
// ==========================
export const getCategoryById = async (req, res) => {
  try {

    // Busca una categoría usando la llave primaria (ID)
    // req.params.id obtiene el id enviado en la URL
    const category = await Category.findByPk(req.params.id);

    // Si no encuentra la categoría
    if (!category) {

      // Retorna error 404 (No encontrado)
      return res.status(404).json({
        message: "Category not found",
      });
    }

    // Si existe, devuelve la categoría encontrada
    res.status(200).json(category);

  } catch (error) {

    // Error interno del servidor
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// CREAR NUEVA CATEGORÍA
// ==========================
export const createCategory = async (req, res) => {
  try {

    // Crea una nueva categoría usando los datos enviados en el body
    const category = await Category.create(req.body);

    // Devuelve estado 201 (Creado)
    res.status(201).json(category);

  } catch (error) {

    // Error interno del servidor
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// ACTUALIZAR CATEGORÍA
// ==========================
export const updateCategory = async (req, res) => {
  try {

    // Busca la categoría por ID
    const category = await Category.findByPk(req.params.id);

    // Si no existe
    if (!category) {

      // Retorna error 404
      return res.status(404).json({
        message: "Category not found",
      });
    }

    // Actualiza la categoría con los nuevos datos enviados
    await category.update(req.body);

    // Devuelve la categoría actualizada
    res.status(200).json(category);

  } catch (error) {

    // Error interno del servidor
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// ELIMINAR CATEGORÍA
// ==========================
export const deleteCategory = async (req, res) => {
  try {

    // Busca la categoría por ID
    const category = await Category.findByPk(req.params.id);

    // Si no existe
    if (!category) {

      // Retorna error 404
      return res.status(404).json({
        message: "Category not found",
      });
    }

    // Elimina la categoría de la base de datos
    await category.destroy();

    // Respuesta de éxito
    res.status(200).json({
      message: "Category deleted successfully",
    });

  } catch (error) {

    // Error interno del servidor
    res.status(500).json({
      message: error.message,
    });
  }
};