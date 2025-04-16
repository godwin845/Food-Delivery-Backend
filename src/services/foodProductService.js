import { FoodProduct } from '../models/FoodProduct.js';

export const saveFoodProduct = async (foodProductData) => {
    const foodProduct = await FoodProduct.create(foodProductData);
    return foodProduct;
};

export const findFoodProductById = async (id) => {
    const foodProduct = await FoodProduct.findByPk(id);
    if (!foodProduct) {
        throw new Error('Food product not found');
    }
    return foodProduct;
};

export const findAllFoodProducts = async () => {
    return await FoodProduct.findAll();
};

export const removeFoodProductById = async (id) => {
    const foodProduct = await FoodProduct.findByPk(id);
    if (!foodProduct) {
        throw new Error('Food product not found');
    }

    await foodProduct.destroy();
    return 'Food product removed successfully';
};

export const findFoodProductsByType = async (type) => {
    return await FoodProduct.findAll({
        where: { type },
    });
};