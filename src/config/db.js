import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'Food Delivery Website', // The name of your database
  'root',                   // Your MySQL username
  'root',               // Your MySQL password
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    // Add options to auto-create database
    define: {
      timestamps: false,    // Optional: to disable auto-adding timestamp fields
    },
    // Auto-create the database if it does not exist
    dialectOptions: {
      timezone: 'Z',         // Disable UTC time zone if not needed
    }
  }
);

export default sequelize;