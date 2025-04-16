import FoodMenu from '../models/FoodMenu.js'; // Assuming you have a FoodMenu model defined in Sequelize

// Save a food menu
export const saveFoodMenuController = async (req, res) => {
  try {
    const { foodMenuData, userId } = req.body;

    // Assuming foodMenuData contains details to create a new food menu, including the userId
    const foodMenu = await FoodMenu.create({
      ...foodMenuData,
      userId // Adding userId directly to the food menu data
    });

    res.status(201).json({ message: 'Food menu saved successfully', data: foodMenu });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Find a food menu by ID
export const findFoodMenuByIdController = async (req, res) => {
  try {
    const { id } = req.query;

    const foodMenu = await FoodMenu.findByPk(id);  // Using Sequelize's findByPk method

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
    const foodMenus = await FoodMenu.findAll();  // Using Sequelize's findAll method
    res.status(200).json({ message: 'Food menus retrieved successfully', data: foodMenus });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove food menu by ID
export const removeFoodMenuByIdController = async (req, res) => {
  try {
    const { id } = req.query;

    const foodMenu = await FoodMenu.findByPk(id);  // Find food menu by ID using findByPk

    if (foodMenu) {
      await foodMenu.destroy();  // Using Sequelize's destroy method to remove the record
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

    const foodMenu = await FoodMenu.findByPk(id);  // Find the food menu by ID using findByPk

    if (foodMenu) {
      const updatedFoodMenu = await foodMenu.update(foodMenuData);  // Using Sequelize's update method
      res.status(200).json({ message: 'Food menu updated successfully', data: updatedFoodMenu });
    } else {
      res.status(404).json({ message: 'Food menu not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update food menu by staff
export const updateFoodProductController = async (req, res) => {
  try {
    const { staffId } = req.query;

    // You would update food menus for a specific staff, depending on your logic.
    // Here's an example where we might update food menus related to the staffId
    const updatedFoodMenus = await FoodMenu.update(
      { staffId },  // Example: Update staffId for the food menu
      { where: { staffId }, returning: true }  // Ensure that we get back the updated records
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