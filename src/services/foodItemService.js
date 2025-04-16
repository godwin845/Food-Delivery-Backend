import FoodItem from '../models/FoodItem.js';

export const saveFoodItem = async (foodItemData) => {
  try {
    const foodItem = await FoodItem.create(foodItemData);
    return foodItem;
  } catch (error) {
    throw new Error('Error saving food item: ' + error.message);
  }
};

export const findFoodItemById = async (foodItemId) => {
  try {
    const foodItem = await FoodItem.findByPk(foodItemId);
    return foodItem;
  } catch (error) {
    throw new Error('Error fetching food item by ID: ' + error.message);
  }
};

export const findByName = async (name) => {
  try {
    const foodItem = await FoodItem.findOne({ where: { name } });
    return foodItem;
  } catch (error) {
    throw new Error('Error fetching food item by name: ' + error.message);
  }
};

export const deleteFoodItem = async (foodItemId) => {
  try {
    const deletedRowCount = await FoodItem.destroy({
      where: { id: foodItemId },
    });
    return deletedRowCount > 0;
  } catch (error) {
    throw new Error('Error deleting food item: ' + error.message);
  }
};