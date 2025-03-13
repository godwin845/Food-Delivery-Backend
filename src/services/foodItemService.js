import FoodItem from '../models/FoodItem.js';

export const saveFoodItem = async (foodItemData) => {
  const foodItem = new FoodItem(foodItemData);
  return await foodItem.save();
};

export const findFoodItemById = async (foodItemId) => {
  return await FoodItem.findById(foodItemId);
};

export const findByName = async (name) => {
  return await FoodItem.findOne({ name });
};

export const deleteFoodItem = async (foodItemId) => {
  const result = await FoodItem.deleteOne({ _id: foodItemId });
  return result.deletedCount > 0;
};