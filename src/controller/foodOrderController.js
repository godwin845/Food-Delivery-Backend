import { saveFoodOrder, findFoodOrderById, findAllFoodOrders, deleteFoodOrderById } from '../services/foodOrderService.js';

// Save a food order
export const saveFoodOrderController = async (req, res) => {
  try {
    const { customerId, foodItems, description } = req.body;
    const foodOrder = await saveFoodOrder(customerId, foodItems, description);  // Corrected this line
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
    const foodOrder = await findFoodOrderById(req.params.id);  // Corrected this line
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
    const foodOrders = await findAllFoodOrders();  // Corrected this line
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
    const foodOrder = await deleteFoodOrderById(req.params.id);  // Corrected this line
    res.status(200).json({
      message: 'Food order deleted successfully',
      data: foodOrder
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};