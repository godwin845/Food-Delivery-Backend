import { DataTypes } from 'sequelize';
import sequelize from '../db.js';  // Sequelize instance

// Enum for User roles
export const Role = {
  STAFF: 'STAFF',
  CUSTOMER: 'CUSTOMER',
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
    type: DataTypes.STRING,
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
  },
});

// Example association to FoodOrder model
User.hasMany(FoodOrder);  // A user can have many food orders
FoodOrder.belongsTo(User);  // A food order belongs to a user

export default User;