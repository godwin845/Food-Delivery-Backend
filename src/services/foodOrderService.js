import { FoodOrder, FoodProduct } from '../models/FoodOrder.js';
import Customer from '../models/Customer.js';

export const saveFoodOrder = async (customerId, foodItems, description) => {
  const customer = await Customer.findByPk(customerId);
  if (!customer) {
    throw new Error('Customer not found');
  }

  let totalCost = 0;
  let products = [];

  for (let item of foodItems) {
    const foodProduct = await FoodProduct.findOne({ where: { name: item.name } });

    if (!foodProduct || foodProduct.availability < item.quantity) {
      throw new Error(`Insufficient stock for ${item.name}`);
    }

    const costPerItem = foodProduct.price;
    const discount = foodProduct.discount;
    const finalPrice = costPerItem - (costPerItem / 100) * discount;

    totalCost += finalPrice * item.quantity;

    products.push(foodProduct.id);
  }

  const foodOrder = await FoodOrder.create({
    description,
    totalCost,
    customerId,
    products,
  });

  return foodOrder;
};

export const findFoodOrderById = async (id) => {
  const foodOrder = await FoodOrder.findByPk(id, {
    include: [
      {
        model: Customer,
        required: true,
      },
      {
        model: FoodProduct,
        required: true,
      },
    ],
  });

  if (!foodOrder) {
    throw new Error('Food order not found');
  }
  return foodOrder;
};

export const findAllFoodOrders = async () => {
  const foodOrders = await FoodOrder.findAll({
    include: [
      {
        model: Customer,
        required: true,
      },
      {
        model: FoodProduct,
        required: true,
      },
    ],
  });

  if (!foodOrders || foodOrders.length === 0) {
    throw new Error('No orders found');
  }
  return foodOrders;
};

export const deleteFoodOrderById = async (id) => {
  const foodOrder = await FoodOrder.destroy({
    where: { id },
  });

  if (!foodOrder) {
    throw new Error('Food order not found');
  }
  return foodOrder;
};