import FoodProduct from '../models/FoodProduct.js';

// Create and save a food product
export const saveFoodProduct = async (foodProductData) => {
    const foodProduct = new FoodProduct(foodProductData);
    await foodProduct.save();
    return foodProduct;
};

// Find food product by ID
export const findFoodProductById = async (id) => {
    const foodProduct = await FoodProduct.findById(id);
    if (!foodProduct) {
        throw new Error('Food product not found');
    }
    return foodProduct;
};

// Get all food products
export const findAllFoodProducts = async () => {
    return await FoodProduct.find();
};

// Remove food product by ID
export const removeFoodProductById = async (id) => {
    const foodProduct = await FoodProduct.findByIdAndDelete(id);
    if (!foodProduct) {
        throw new Error('Food product not found');
    }
    return 'Food product removed successfully';
};

// Find food products by type
export const findFoodProductsByType = async (type) => {
    return await FoodProduct.find({ type: type });
};