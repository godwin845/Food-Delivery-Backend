// foodOrderService.js
import { FoodOrder, FoodProduct } from '../models/FoodOrder.js';  // Import Sequelize models
import Customer from '../models/Customer.js';

// Save a food order
export const saveFoodOrder = async (customerId, foodItems, description) => {
  const customer = await Customer.findByPk(customerId);  // Find customer by primary key
  if (!customer) {
    throw new Error('Customer not found');
  }

  let totalCost = 0;
  let products = [];

  // Process food items
  for (let item of foodItems) {
    const foodProduct = await FoodProduct.findOne({ where: { name: item.name } });  // Find food product by name

    if (!foodProduct || foodProduct.availability < item.quantity) {
      throw new Error(`Insufficient stock for ${item.name}`);
    }

    const costPerItem = foodProduct.price;
    const discount = foodProduct.discount;
    const finalPrice = costPerItem - (costPerItem / 100) * discount;

    totalCost += finalPrice * item.quantity;

    // Add the food product's id to the products array
    products.push(foodProduct.id);
  }

  // Create the food order
  const foodOrder = await FoodOrder.create({
    description,
    totalCost,
    customerId,  // Associate the customer with the food order
    products,  // This assumes products are stored as IDs, Sequelize will handle the relation
  });

  return foodOrder;
};

// Find a food order by ID
export const findFoodOrderById = async (id) => {
  const foodOrder = await FoodOrder.findByPk(id, {
    include: [
      {
        model: Customer,  // Eager load the associated customer
        required: true,   // Ensures the order must have an associated customer
      },
      {
        model: FoodProduct,  // Eager load the associated food products
        required: true,
      },
    ],
  });

  if (!foodOrder) {
    throw new Error('Food order not found');
  }
  return foodOrder;
};

// Find all food orders
export const findAllFoodOrders = async () => {
  const foodOrders = await FoodOrder.findAll({
    include: [
      {
        model: Customer,  // Eager load the associated customer
        required: true,
      },
      {
        model: FoodProduct,  // Eager load the associated food products
        required: true,
      },
    ],
  });

  if (!foodOrders || foodOrders.length === 0) {
    throw new Error('No orders found');
  }
  return foodOrders;
};

// Delete a food order by ID
export const deleteFoodOrderById = async (id) => {
  const foodOrder = await FoodOrder.destroy({
    where: { id },  // Find food order by ID
  });

  if (!foodOrder) {
    throw new Error('Food order not found');
  }
  return foodOrder;
};