import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Customer from './Customer.js'; // Import Customer model
import FoodProduct from './FoodProduct.js'; // Import FoodProduct model

const FoodOrder = sequelize.define('FoodOrder', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Define associations (relationships)
FoodOrder.belongsTo(Customer, { foreignKey: 'customerId', onDelete: 'CASCADE' }); // FoodOrder -> Customer (1-to-1)
FoodOrder.belongsToMany(FoodProduct, { through: 'FoodOrder_FoodProducts' }); // Many-to-many relationship between FoodOrder and FoodProduct
FoodProduct.belongsToMany(FoodOrder, { through: 'FoodOrder_FoodProducts' }); // Reverse of above relationship

export default FoodOrder;