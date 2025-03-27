import { saveCustomer, findCustomerById, findCustomerByPhoneNumber, findAllCustomers, updateCustomer, removeCustomerById } from '../services/customerService.js';

// Save customer
export const saveCustomerController = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const customerData = { name, email, phoneNumber };
    const customer = await saveCustomer(customerData);  // Corrected
    res.status(201).json({ status: 201, message: 'Customer created successfully', data: customer });
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error creating customer', error: err.message });
  }
};

// Find customer by ID
export const findCustomerByIdController = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const customer = await findCustomerById(customerId);  // Corrected
    if (customer) {
      res.status(200).json({ status: 200, message: 'Customer found', data: customer });
    } else {
      res.status(404).json({ status: 404, message: 'Customer not found' });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error fetching customer', error: err.message });
  }
};

// Find customer by phone number
export const findCustomerByPhoneNumberController = async (req, res) => {
  try {
    const phoneNumber = req.query.customerPhoneNumber;
    const customer = await findCustomerByPhoneNumber(phoneNumber);  // Corrected
    if (customer) {
      res.status(200).json({ status: 200, message: 'Customer found', data: customer });
    } else {
      res.status(404).json({ status: 404, message: 'Customer not found' });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error fetching customer', error: err.message });
  }
};

// Find all customers
export const findAllCustomersController = async (req, res) => {
  try {
    const customers = await findAllCustomers();  // Corrected
    res.status(200).json({ status: 200, message: 'Customers retrieved successfully', data: customers });
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error fetching customers', error: err.message });
  }
};

// Update customer
export const updateCustomerController = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const updatedData = req.body;
    const customer = await updateCustomer(customerId, updatedData);  // Corrected
    if (customer) {
      res.status(200).json({ status: 200, message: 'Customer updated successfully', data: customer });
    } else {
      res.status(404).json({ status: 404, message: 'Customer not found' });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error updating customer', error: err.message });
  }
};

// Remove customer by ID
export const removeCustomerByIdController = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const customer = await removeCustomerById(customerId);  // Corrected
    if (customer) {
      res.status(204).json({ status: 204, message: 'Customer removed successfully' });
    } else {
      res.status(404).json({ status: 404, message: 'Customer not found' });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error removing customer', error: err.message });
  }
};