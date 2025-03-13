import { 
  saveFoodMenu, 
  findFoodMenuById, 
  findAllFoodMenus, 
  removeFoodMenuById, 
  updateFoodMenu, 
  updateFoodProduct 
} from '../services/foodMenuService.js';

// Save a food menu
export const saveFoodMenuController = async (req, res) => {
  try {
    const { foodMenuData, userId } = req.body;
    const foodMenu = await saveFoodMenu(foodMenuData, userId);
    res.status(201).json({ message: 'Food menu saved successfully', data: foodMenu });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Find a food menu by ID
export const findFoodMenuByIdController = async (req, res) => {
  try {
    const { id } = req.query;
    const foodMenu = await findFoodMenuById(id);
    if (foodMenu) {
      res.status(200).json({ message: 'Food menu retrieved successfully', data: foodMenu });
    } else {
      res.status(404).json({ message: 'Food menu not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Find all food menus
export const findAllFoodMenusController = async (req, res) => {
  try {
    const foodMenus = await findAllFoodMenus();
    res.status(200).json({ message: 'Food menus retrieved successfully', data: foodMenus });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove food menu by ID
export const removeFoodMenuByIdController = async (req, res) => {
  try {
    const { id } = req.query;
    const deleted = await removeFoodMenuById(id);
    if (deleted) {
      res.status(204).json({ message: 'Food menu removed successfully' });
    } else {
      res.status(404).json({ message: 'Food menu not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a food menu
export const updateFoodMenuController = async (req, res) => {
  try {
    const { id, foodMenuData } = req.body;
    const updatedFoodMenu = await updateFoodMenu(id, foodMenuData);
    res.status(200).json({ message: 'Food menu updated successfully', data: updatedFoodMenu });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update food menu by staff
export const updateFoodProductController = async (req, res) => {
  try {
    const { staffId } = req.query;
    const updatedFoodMenus = await updateFoodProduct(staffId);
    res.status(200).json({ message: 'Food menu updated by staff', data: updatedFoodMenus });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};