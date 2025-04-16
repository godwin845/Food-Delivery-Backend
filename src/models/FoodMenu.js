import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import FoodProduct from "./FoodProduct.js";

const FoodMenu = sequelize.define('FoodMenu', {
  dishes: {
    type: DataTypes.ENUM('VEGETARIAN', 'NON_VEGETARIAN', 'VEGAN'),
    allowNull: false,
  },
}, {
  timestamps: true,
});

FoodMenu.belongsToMany(FoodProduct, { through: 'FoodMenu_FoodProducts' });

// Adding aliases for self-association
FoodMenu.belongsToMany(FoodMenu, { 
  through: 'FoodMenu_FoodProducts', 
  as: 'RelatedMenus',  // You can use any alias here
  foreignKey: 'menuId', // Optionally, define the foreign key if needed
});

export default FoodMenu;