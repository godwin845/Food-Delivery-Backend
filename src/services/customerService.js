// customerService.js
import Customer from '../models/Customer.js';  // Import the Sequelize model

// Create a new customer
export const saveCustomer = async (customerData) => {
  try {
    const customer = await Customer.create(customerData); // Sequelize's `create()` method
    return customer;
  } catch (error) {
    throw new Error('Error creating customer: ' + error.message);
  }
};

// Find customer by ID
export const findCustomerById = async (customerId) => {
  try {
    const customer = await Customer.findByPk(customerId); // Sequelize's `findByPk()` for primary key
    return customer;
  } catch (error) {
    throw new Error('Error fetching customer by ID: ' + error.message);
  }
};

// Find customer by phone number
export const findCustomerByPhoneNumber = async (phoneNumber) => {
  try {
    const customer = await Customer.findOne({ where: { phoneNumber } }); // Sequelize's `findOne()` with `where` clause
    return customer;
  } catch (error) {
    throw new Error('Error fetching customer by phone number: ' + error.message);
  }
};

// Find all customers
export const findAllCustomers = async () => {
  try {
    const customers = await Customer.findAll(); // Sequelize's `findAll()`
    return customers;
  } catch (error) {
    throw new Error('Error fetching all customers: ' + error.message);
  }
};

// Update a customer
export const updateCustomer = async (customerId, updatedData) => {
  try {
    const [updatedRowCount, updatedCustomers] = await Customer.update(updatedData, {
      where: { id: customerId }, // Condition to find the customer by ID
      returning: true,  // Get the updated customer details
    });
    return updatedCustomers[0]; // `updatedCustomers` contains the updated rows
  } catch (error) {
    throw new Error('Error updating customer: ' + error.message);
  }
};

// Remove customer by ID
export const removeCustomerById = async (customerId) => {
  try {
    const deletedRowCount = await Customer.destroy({
      where: { id: customerId }  // Condition to find the customer by ID
    });
    return deletedRowCount;  // Returns the number of deleted rows
  } catch (error) {
    throw new Error('Error deleting customer: ' + error.message);
  }
};