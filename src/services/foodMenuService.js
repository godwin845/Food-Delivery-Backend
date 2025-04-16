// foodMenuService.js
import { FoodMenu, FoodProduct } from '../models/FoodMenu.js';  // Import the Sequelize models
import User from '../models/userModel.js';  // Import the Sequelize User model

// Save a new food menu with user authorization check
const saveFoodMenu = async (foodMenuData, userId) => {
  const user = await User.findByPk(userId);  // Use Sequelize's `findByPk()` for primary key lookup
  if (!user) throw new Error('User not found');

  if (user.role === 'ADMIN' || user.role === 'MANAGER') {
    const foodMenu = await FoodMenu.create(foodMenuData); // Sequelize's `create()` method
    return foodMenu;
  } else {
    throw new Error('User does not have sufficient permissions');
  }
};

// Find FoodMenu by ID with related food products
const findFoodMenuById = async (id) => {
  const foodMenu = await FoodMenu.findByPk(id, {
    include: FoodProduct, // Use Sequelize's `include` to load related `FoodProduct` data
  });
  return foodMenu;
};

// Find all food menus with related food products
const findAllFoodMenus = async () => {
  const foodMenus = await FoodMenu.findAll({
    include: FoodProduct,  // Use `include` to load related `FoodProduct` data
  });
  return foodMenus;
};

// Remove FoodMenu by ID
const removeFoodMenuById = async (id) => {
  const deletedRowCount = await FoodMenu.destroy({
    where: { id },  // `destroy()` method with `where` clause
  });
  return deletedRowCount > 0;  // If a row was deleted, return true
};

// Update FoodMenu by ID
const updateFoodMenu = async (id, foodMenuData) => {
  const [updatedRowCount, updatedFoodMenu] = await FoodMenu.update(foodMenuData, {
    where: { id },  // `update()` method with `where` clause to find by ID
    returning: true,  // To get the updated row(s)
  });
  return updatedFoodMenu[0];  // Return the updated food menu
};

// Update food products in food menus by staff ID
const updateFoodProduct = async (staffId) => {
  const user = await User.findByPk(staffId);  // Use `findByPk()` to find user by ID
  if (!user || user.role !== 'STAFF') throw new Error('Staff not found or role mismatch');

  // Logic to update food products in menus
  // You can perform necessary logic like checking for stock or orders here
  
  const foodMenus = await FoodMenu.findAll({
    include: {
      model: FoodProduct,  // Include the related `FoodProduct`
      required: false,     // Optional: to get menus even if there are no food products
    },
  });

  // Modify `foodMenus` as needed, like updating food product details
  return foodMenus;
};

export {
  saveFoodMenu,
  findFoodMenuById,
  findAllFoodMenus,
  removeFoodMenuById,
  updateFoodMenu,
  updateFoodProduct
};