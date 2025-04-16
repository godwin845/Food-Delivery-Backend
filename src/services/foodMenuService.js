import { FoodMenu, FoodProduct } from '../models/FoodMenu.js';
import User from '../models/userModel.js';

const saveFoodMenu = async (foodMenuData, userId) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error('User not found');

  if (user.role === 'ADMIN' || user.role === 'MANAGER') {
    const foodMenu = await FoodMenu.create(foodMenuData);
    return foodMenu;
  } else {
    throw new Error('User does not have sufficient permissions');
  }
};

const findFoodMenuById = async (id) => {
  const foodMenu = await FoodMenu.findByPk(id, {
    include: FoodProduct,
  });
  return foodMenu;
};

const findAllFoodMenus = async () => {
  const foodMenus = await FoodMenu.findAll({
    include: FoodProduct,
  });
  return foodMenus;
};

const removeFoodMenuById = async (id) => {
  const deletedRowCount = await FoodMenu.destroy({
    where: { id },
  });
  return deletedRowCount > 0;
};

const updateFoodMenu = async (id, foodMenuData) => {
  const [updatedRowCount, updatedFoodMenu] = await FoodMenu.update(foodMenuData, {
    where: { id },
    returning: true,
  });
  return updatedFoodMenu[0];
};

const updateFoodProduct = async (staffId) => {
  const user = await User.findByPk(staffId);
  if (!user || user.role !== 'STAFF') throw new Error('Staff not found or role mismatch');
  
  const foodMenus = await FoodMenu.findAll({
    include: {
      model: FoodProduct,
      required: false,
    },
  });

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