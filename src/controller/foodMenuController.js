import FoodMenu from '../models/FoodMenu.js';

export const saveFoodMenuController = async (req, res) => {
  try {
    const { foodMenuData, userId } = req.body;

    const foodMenu = await FoodMenu.create({
      ...foodMenuData,
      userId
    });

    res.status(201).json({ message: 'Food menu saved successfully', data: foodMenu });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const findFoodMenuByIdController = async (req, res) => {
  try {
    const { id } = req.query;

    const foodMenu = await FoodMenu.findByPk(id);

    if (foodMenu) {
      res.status(200).json({ message: 'Food menu retrieved successfully', data: foodMenu });
    } else {
      res.status(404).json({ message: 'Food menu not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const findAllFoodMenusController = async (req, res) => {
  try {
    const foodMenus = await FoodMenu.findAll();
    res.status(200).json({ message: 'Food menus retrieved successfully', data: foodMenus });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const removeFoodMenuByIdController = async (req, res) => {
  try {
    const { id } = req.query;

    const foodMenu = await FoodMenu.findByPk(id);

    if (foodMenu) {
      await foodMenu.destroy();
      res.status(204).json({ message: 'Food menu removed successfully' });
    } else {
      res.status(404).json({ message: 'Food menu not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateFoodMenuController = async (req, res) => {
  try {
    const { id, foodMenuData } = req.body;

    const foodMenu = await FoodMenu.findByPk(id);

    if (foodMenu) {
      const updatedFoodMenu = await foodMenu.update(foodMenuData);
      res.status(200).json({ message: 'Food menu updated successfully', data: updatedFoodMenu });
    } else {
      res.status(404).json({ message: 'Food menu not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateFoodProductController = async (req, res) => {
  try {
    const { staffId } = req.query;

    const updatedFoodMenus = await FoodMenu.update(
      { staffId },
      { where: { staffId }, returning: true }
    );

    if (updatedFoodMenus[0] > 0) {
      res.status(200).json({ message: 'Food menu updated by staff', data: updatedFoodMenus[1] });
    } else {
      res.status(404).json({ message: 'Food menu(s) not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};