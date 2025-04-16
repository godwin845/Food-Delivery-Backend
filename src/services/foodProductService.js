// foodProductService.js
import { FoodProduct } from '../models/FoodProduct.js';  // Import Sequelize model

// Create and save a food product
export const saveFoodProduct = async (foodProductData) => {
    const foodProduct = await FoodProduct.create(foodProductData);  // Use Sequelize's `create()` method
    return foodProduct;
};

// Find food product by ID
export const findFoodProductById = async (id) => {
    const foodProduct = await FoodProduct.findByPk(id);  // Find by primary key (ID)
    if (!foodProduct) {
        throw new Error('Food product not found');
    }
    return foodProduct;
};

// Get all food products
export const findAllFoodProducts = async () => {
    return await FoodProduct.findAll();  // Get all food products
};

// Remove food product by ID
export const removeFoodProductById = async (id) => {
    const foodProduct = await FoodProduct.findByPk(id);  // Find the food product by ID
    if (!foodProduct) {
        throw new Error('Food product not found');
    }

    await foodProduct.destroy();  // Delete the food product using `destroy()`
    return 'Food product removed successfully';
};

// Find food products by type
export const findFoodProductsByType = async (type) => {
    return await FoodProduct.findAll({
        where: { type },  // Filter food products by type using `where`
    });
};