import { FoodMenu } from '../models/FoodMenu.js';
import User from '../models/userModel.js';

const saveFoodMenu = async (foodMenuData, userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');
  
  if (user.role === 'ADMIN' || user.role === 'MANAGER') {
    const foodMenu = new FoodMenu(foodMenuData);
    return await foodMenu.save();
  } else {
    throw new Error('User does not have sufficient permissions');
  }
};

const findFoodMenuById = async (id) => {
  return await FoodMenu.findById(id).populate('foodProducts');
};

const findAllFoodMenus = async () => {
  return await FoodMenu.find().populate('foodProducts');
};

const removeFoodMenuById = async (id) => {
  const result = await FoodMenu.deleteOne({ _id: id });
  return result.deletedCount > 0;
};

const updateFoodMenu = async (id, foodMenuData) => {
  return await FoodMenu.findByIdAndUpdate(id, foodMenuData, { new: true });
};

const updateFoodProduct = async (staffId) => {
  const user = await User.findById(staffId);
  if (!user || user.role !== 'STAFF') throw new Error('Staff not found or role mismatch');
  
  const foodMenus = await FoodMenu.find().populate('foodProducts');
  
  // Logic to update food products in menus
  // This will require updating based on orders or available stock.
  
  return foodMenus;
};

export { saveFoodMenu, findFoodMenuById, findAllFoodMenus, removeFoodMenuById, updateFoodMenu, updateFoodProduct };