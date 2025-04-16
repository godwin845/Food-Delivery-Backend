import FoodItem from '../models/FoodItem.js'; // Assuming you have a FoodItem model defined in Sequelize

// Save food item
export const saveFoodItemController = async (req, res) => {
  try {
    const foodItemData = req.body;
    const savedFoodItem = await FoodItem.create(foodItemData);  // Using Sequelize's create method
    res.status(201).json({ message: 'Food item saved successfully', data: savedFoodItem });
  } catch (err) {
    res.status(500).json({ message: 'Error saving food item', error: err.message });
  }
};

// Find food item by ID
export const findFoodItemByIdController = async (req, res) => {
  try {
    const foodItemId = req.query.foodItemId;
    const foodItem = await FoodItem.findByPk(foodItemId);  // Using Sequelize's findByPk method
    if (foodItem) {
      res.status(200).json({ message: 'Food item retrieved successfully', data: foodItem });
    } else {
      res.status(404).json({ message: 'Food item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving food item', error: err.message });
  }
};

// Find food item by name
export const findByNameController = async (req, res) => {
  try {
    const name = req.query.name;
    const foodItem = await FoodItem.findOne({ where: { name } });  // Using Sequelize's findOne method
    if (foodItem) {
      res.status(200).json({ message: 'Food item retrieved successfully', data: foodItem });
    } else {
      res.status(404).json({ message: 'Food item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving food item', error: err.message });
  }
};

// Delete food item by ID
export const deleteFoodItemController = async (req, res) => {
  try {
    const foodItemId = req.query.foodItemId;
    const foodItem = await FoodItem.findByPk(foodItemId);  // Using Sequelize's findByPk method
    if (foodItem) {
      await foodItem.destroy();  // Using Sequelize's destroy method
      res.status(204).json({ message: 'Food item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Food item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting food item', error: err.message });
  }
};