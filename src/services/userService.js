import { User } from '../models/userModel.js';
import { Role } from '../models/userModel.js';
import { FoodOrder } from '../models/foodOrderModel.js';

// Save a new user
export const saveUser = async (user) => {
  try {
    const newUser = new User(user);
    await newUser.save();
    if (user.role === Role.STAFF) {
      newUser.foodOrders = await FoodOrder.find();
      await newUser.save();
    }
    return newUser;
  } catch (error) {
    throw new Error('Error saving user: ' + error.message);
  }
};

// Find a user by email
export const findByEmail = async (email) => {
  return await User.findOne({ email });
};

// Find a user by ID
export const findById = async (userId) => {
  return await User.findById(userId);
};

// Find a user by phone number
export const findByPhoneNumber = async (phoneNumber) => {
  return await User.findOne({ phoneNumber });
};

// Find all users
export const findAllUsers = async () => {
  return await User.find();
};

// Update user data by email
export const updateUser = async (email, userData) => {
  const user = await User.findOne({ email });
  if (user) {
    Object.assign(user, userData);
    await user.save();
    return user;
  }
  throw new Error('User not found');
};

// Remove a user by email
export const removeUser = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    await user.remove();
    return 'User removed successfully';
  }
  throw new Error('User not found');
};