import Category from "./category.model.js";
import Product from "./product.model.js";

// CATEGORY -> PRODUCT
Category.hasMany(Product, {
  foreignKey: "category_id",
  as: "products",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
});

// CATEGORY -> CATEGORY
Category.hasMany(Category, {
  foreignKey: "parent_id",
  as: "subcategories",
});

Category.belongsTo(Category, {
  foreignKey: "parent_id",
  as: "parentCategory",
});

export { Category, Product };