import FoodItem from '../models/FoodItem.js';

export const saveFoodItemController = async (req, res) => {
  try {
    const foodItemData = req.body;
    const savedFoodItem = await FoodItem.create(foodItemData);
    res.status(201).json({ message: 'Food item saved successfully', data: savedFoodItem });
  } catch (err) {
    res.status(500).json({ message: 'Error saving food item', error: err.message });
  }
};

export const findFoodItemByIdController = async (req, res) => {
  try {
    const foodItemId = req.query.foodItemId;
    const foodItem = await FoodItem.findByPk(foodItemId);
    if (foodItem) {
      res.status(200).json({ message: 'Food item retrieved successfully', data: foodItem });
    } else {
      res.status(404).json({ message: 'Food item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving food item', error: err.message });
  }
};

export const findByNameController = async (req, res) => {
  try {
    const name = req.query.name;
    const foodItem = await FoodItem.findOne({ where: { name } });
    if (foodItem) {
      res.status(200).json({ message: 'Food item retrieved successfully', data: foodItem });
    } else {
      res.status(404).json({ message: 'Food item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving food item', error: err.message });
  }
};

export const deleteFoodItemController = async (req, res) => {
  try {
    const foodItemId = req.query.foodItemId;
    const foodItem = await FoodItem.findByPk(foodItemId);
    if (foodItem) {
      await foodItem.destroy();
      res.status(204).json({ message: 'Food item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Food item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting food item', error: err.message });
  }
};