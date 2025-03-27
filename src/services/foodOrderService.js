import { FoodOrder } from '../models/FoodOrder.js';
import Customer from '../models/Customer.js';
import FoodProduct from '../models/FoodProduct.js';

// Save a food order
export const saveFoodOrder = async (customerId, foodItems, description) => {
  const customer = await Customer.findById(customerId);
  if (!customer) {
    throw new Error('Customer not found');
  }

  let totalCost = 0;
  let products = [];

  // Process food items
  for (let item of foodItems) {
    const foodProduct = await FoodProduct.findOne({ name: item.name });

    if (!foodProduct || foodProduct.availability < item.quantity) {
      throw new Error(`Insufficient stock for ${item.name}`);
    }

    const costPerItem = foodProduct.price;
    const discount = foodProduct.discount;
    const finalPrice = costPerItem - (costPerItem / 100) * discount;

    totalCost += finalPrice * item.quantity;

    // Add to products array
    products.push(foodProduct._id);
  }

  // Create the food order
  const foodOrder = new FoodOrder({
    description,
    totalCost,
    customer: customer._id,
    products
  });

  await foodOrder.save();
  return foodOrder;
};

// Find a food order by ID
export const findFoodOrderById = async (id) => {
  const foodOrder = await FoodOrder.findById(id).populate('customer').populate('products');
  if (!foodOrder) {
    throw new Error('Food order not found');
  }
  return foodOrder;
};

// Find all food orders
export const findAllFoodOrders = async () => {
  const foodOrders = await FoodOrder.find().populate('customer').populate('products');
  if (!foodOrders || foodOrders.length === 0) {
    throw new Error('No orders found');
  }
  return foodOrders;
};

// Delete a food order by ID
export const deleteFoodOrderById = async (id) => {
  const foodOrder = await FoodOrder.findByIdAndDelete(id);
  if (!foodOrder) {
    throw new Error('Food order not found');
  }
  return foodOrder;
};