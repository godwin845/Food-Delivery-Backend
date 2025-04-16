// foodItemService.js
import FoodItem from '../models/FoodItem.js';  // Import the Sequelize model

// Create and save a new FoodItem
export const saveFoodItem = async (foodItemData) => {
  try {
    const foodItem = await FoodItem.create(foodItemData);  // Sequelize's `create()` method
    return foodItem;
  } catch (error) {
    throw new Error('Error saving food item: ' + error.message);
  }
};

// Find a FoodItem by ID
export const findFoodItemById = async (foodItemId) => {
  try {
    const foodItem = await FoodItem.findByPk(foodItemId);  // Sequelize's `findByPk()` method
    return foodItem;
  } catch (error) {
    throw new Error('Error fetching food item by ID: ' + error.message);
  }
};

// Find a FoodItem by name
export const findByName = async (name) => {
  try {
    const foodItem = await FoodItem.findOne({ where: { name } });  // Sequelize's `findOne()` method with `where` clause
    return foodItem;
  } catch (error) {
    throw new Error('Error fetching food item by name: ' + error.message);
  }
};

// Delete a FoodItem by ID
export const deleteFoodItem = async (foodItemId) => {
  try {
    const deletedRowCount = await FoodItem.destroy({
      where: { id: foodItemId },  // Sequelize's `destroy()` method
    });
    return deletedRowCount > 0;  // If one or more rows are deleted, return `true`
  } catch (error) {
    throw new Error('Error deleting food item: ' + error.message);
  }
};