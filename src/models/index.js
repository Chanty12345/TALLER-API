// Importa el modelo Category
// Representa la tabla de categorías
import Category from "./category.model.js";

// Importa el modelo Product
// Representa la tabla de productos
import Product from "./product.model.js";

// ======================================
// RELACIÓN CATEGORY -> PRODUCT
// ======================================

// Una categoría puede tener muchos productos
Category.hasMany(Product, {

  // Llave foránea en la tabla products
  foreignKey: "category_id",

  // Alias para acceder a los productos
  // Ejemplo: category.products
  as: "products",
});

// Un producto pertenece a una categoría
Product.belongsTo(Category, {

  // Llave foránea en products
  foreignKey: "category_id",

  // Alias para acceder a la categoría
  // Ejemplo: product.category
  as: "category",
});

// ======================================
// RELACIÓN CATEGORY -> CATEGORY
// ======================================

// Una categoría puede tener muchas subcategorías
Category.hasMany(Category, {

  // Campo que conecta la categoría padre
  foreignKey: "parent_id",

  // Alias para acceder a las subcategorías
  // Ejemplo: category.subcategories
  as: "subcategories",
});

// Una categoría puede pertenecer
// a otra categoría padre
Category.belongsTo(Category, {

  // Llave foránea
  foreignKey: "parent_id",

  // Alias para acceder a la categoría padre
  // Ejemplo: category.parentCategory
  as: "parentCategory",
});

// Exporta los modelos para usarlos
// en controladores, rutas, etc.
export { Category, Product };