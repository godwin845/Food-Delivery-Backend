import { DataTypes } from "sequelize";
import sequelize from '../config/db.js';

const FoodItem = sequelize.define('FoodItem', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(3000),
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {

  timestamps: true,
});

export default FoodItem;