import FoodOrder from '../models/FoodOrder.js';
import FoodItem from '../models/FoodItem.js';

// Save a food order
export const saveFoodOrderController = async (req, res) => {
  try {
    const { customerId, foodItems, description } = req.body;

    // Assuming FoodOrder has a relation to FoodItems (via a many-to-many relationship)
    // Creating the order and associating the food items
    const foodOrder = await FoodOrder.create({
      customerId,
      description
    });

    // Add food items to the order using a many-to-many relationship
    // Assuming the foodItems array contains food item IDs
    await foodOrder.addFoodItems(foodItems); // Using Sequelize's add association method
    
    res.status(201).json({
      message: 'Order placed successfully',
      data: foodOrder
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Find a food order by ID
export const findFoodOrderByIdController = async (req, res) => {
  try {
    const foodOrder = await FoodOrder.findByPk(req.params.id, {
      include: [{ model: FoodItem, as: 'foodItems' }] // Assuming food items are associated
    });

    if (!foodOrder) {
      return res.status(404).json({ message: 'Food order not found' });
    }

    res.status(200).json({
      message: 'Food order found successfully',
      data: foodOrder
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Find all food orders
export const findAllFoodOrdersController = async (req, res) => {
  try {
    const foodOrders = await FoodOrder.findAll({
      include: [{ model: FoodItem, as: 'foodItems' }] // Assuming you want to include food items with each order
    });

    res.status(200).json({
      message: 'All food orders found successfully',
      data: foodOrders
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Delete a food order by ID
export const deleteFoodOrderByIdController = async (req, res) => {
  try {
    const foodOrder = await FoodOrder.findByPk(req.params.id);

    if (!foodOrder) {
      return res.status(404).json({ message: 'Food order not found' });
    }

    await foodOrder.destroy();  // Deleting the food order from the database

    res.status(200).json({
      message: 'Food order deleted successfully',
      data: foodOrder
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}