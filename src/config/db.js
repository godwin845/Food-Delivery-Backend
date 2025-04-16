import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  'Food Delivery Website',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,

    define: {
      timestamps: false,
    },

    dialectOptions: {
      timezone: 'Z',
    }
  }
);

export default sequelize;