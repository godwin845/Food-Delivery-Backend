import { DataTypes } from "sequelize";
import sequelize from '../config/db.js';

const FoodProduct = sequelize.define('FoodProduct', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [0, 255],
        }
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            len: [0, 255],
        }
    },
    discount: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    availability: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    type: {
        type: DataTypes.ENUM('VEG', 'NON_VEG'),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(3000),
        allowNull: false,
    }
}, {

    timestamps: true,
});

export default FoodProduct;