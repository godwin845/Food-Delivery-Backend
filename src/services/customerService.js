import Customer from '../models/Customer.js';

// Create a new customer
export const saveCustomer = async (customerData) => {
  try {
    const customer = new Customer(customerData);
    await customer.save();
    return customer;
  } catch (error) {
    throw new Error('Error creating customer: ' + error.message);
  }
};

// Find customer by ID
export const findCustomerById = async (customerId) => {
  try {
    const customer = await Customer.findById(customerId);
    return customer;
  } catch (error) {
    throw new Error('Error fetching customer by ID: ' + error.message);
  }
};

// Find customer by phone number
export const findCustomerByPhoneNumber = async (phoneNumber) => {
  try {
    const customer = await Customer.findOne({ phoneNumber });
    return customer;
  } catch (error) {
    throw new Error('Error fetching customer by phone number: ' + error.message);
  }
};

// Find all customers
export const findAllCustomers = async () => {
  try {
    const customers = await Customer.find();
    return customers;
  } catch (error) {
    throw new Error('Error fetching all customers: ' + error.message);
  }
};

// Update a customer
export const updateCustomer = async (customerId, updatedData) => {
  try {
    const customer = await Customer.findByIdAndUpdate(customerId, updatedData, { new: true });
    return customer;
  } catch (error) {
    throw new Error('Error updating customer: ' + error.message);
  }
};

// Remove customer by ID
export const removeCustomerById = async (customerId) => {
  try {
    const customer = await Customer.findByIdAndDelete(customerId);
    return customer;
  } catch (error) {
    throw new Error('Error deleting customer: ' + error.message);
  }
};