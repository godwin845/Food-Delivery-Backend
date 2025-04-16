// User.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import FoodOrder from './FoodOrder.js'; // Import FoodOrder model

export const Role = {
  STAFF: 'STAFF',
  CUSTOMER: 'CUSTOMER'
};

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: DataTypes.STRING, // Changed from Number to String as phone numbers are usually stored as strings
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('STAFF', 'CUSTOMER'),
    allowNull: false,
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Define associations (relationships)
User.belongsToMany(FoodOrder, { through: 'User_FoodOrders' }); // Many-to-many relationship between User and FoodOrder
FoodOrder.belongsToMany(User, { through: 'User_FoodOrders' }); // Reverse relationship

export default User;