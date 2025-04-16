import FoodOrder from '../models/FoodOrder.js';
import FoodItem from '../models/FoodItem.js';

export const saveFoodOrderController = async (req, res) => {
  try {
    const { customerId, foodItems, description } = req.body;

    const foodOrder = await FoodOrder.create({
      customerId,
      description
    });

    await foodOrder.addFoodItems(foodItems);
    
    res.status(201).json({
      message: 'Order placed successfully',
      data: foodOrder
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const findFoodOrderByIdController = async (req, res) => {
  try {
    const foodOrder = await FoodOrder.findByPk(req.params.id, {
      include: [{ model: FoodItem, as: 'foodItems' }]
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

export const findAllFoodOrdersController = async (req, res) => {
  try {
    const foodOrders = await FoodOrder.findAll({
      include: [{ model: FoodItem, as: 'foodItems' }]
    });

    res.status(200).json({
      message: 'All food orders found successfully',
      data: foodOrders
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteFoodOrderByIdController = async (req, res) => {
  try {
    const foodOrder = await FoodOrder.findByPk(req.params.id);

    if (!foodOrder) {
      return res.status(404).json({ message: 'Food order not found' });
    }

    await foodOrder.destroy();

    res.status(200).json({
      message: 'Food order deleted successfully',
      data: foodOrder
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}