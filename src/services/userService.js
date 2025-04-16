import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

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

User.hasMany(FoodOrder);
FoodOrder.belongsTo(User);

export default User;