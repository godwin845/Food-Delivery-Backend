import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import FoodOrder from './FoodOrder.js';

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
  }
}, {
  timestamps: true,
});

User.belongsToMany(FoodOrder, { through: 'User_FoodOrders' });
FoodOrder.belongsToMany(User, { through: 'User_FoodOrders' });

export default User;