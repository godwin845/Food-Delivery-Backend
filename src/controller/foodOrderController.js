import FoodOrderService from '../services/FoodOrderService.js';

// Save a food order
export const saveFoodOrder = async (req, res) => {
  try {
    const { customerId, foodItems, description } = req.body;
    const foodOrder = await FoodOrderService.saveFoodOrder(customerId, foodItems, description);
    res.status(201).json({
      message: 'Order placed successfully',
      data: foodOrder
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Find a food order by ID
export const findFoodOrderById = async (req, res) => {
  try {
    const foodOrder = await FoodOrderService.findFoodOrderById(req.params.id);
    res.status(200).json({
      message: 'Food order found successfully',
      data: foodOrder
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Find all food orders
export const findAllFoodOrders = async (req, res) => {
  try {
    const foodOrders = await FoodOrderService.findAllFoodOrders();
    res.status(200).json({
      message: 'All food orders found successfully',
      data: foodOrders
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Delete a food order by ID
export const deleteFoodOrderById = async (req, res) => {
  try {
    const foodOrder = await FoodOrderService.deleteFoodOrderById(req.params.id);
    res.status(200).json({
      message: 'Food order deleted successfully',
      data: foodOrder
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};