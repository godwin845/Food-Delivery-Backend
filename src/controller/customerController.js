import CustomerService from '../services/customerService.js';
import ResponseStructure from '../utils/responseStructure.js';

// Save customer
export const saveCustomer = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const customerData = { name, email, phoneNumber };
    const customer = await CustomerService.saveCustomer(customerData);
    const response = new ResponseStructure(201, 'Customer created successfully', customer);
    res.status(201).json(response);
  } catch (err) {
    const response = new ResponseStructure(400, 'Error creating customer', err.message);
    res.status(400).json(response);
  }
};

// Find customer by ID
export const findCustomerById = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const customer = await CustomerService.findCustomerById(customerId);
    if (customer) {
      const response = new ResponseStructure(200, 'Customer found', customer);
      res.status(200).json(response);
    } else {
      const response = new ResponseStructure(404, 'Customer not found');
      res.status(404).json(response);
    }
  } catch (err) {
    const response = new ResponseStructure(400, 'Error fetching customer', err.message);
    res.status(400).json(response);
  }
};

// Find customer by phone number
export const findCustomerByPhoneNumber = async (req, res) => {
  try {
    const phoneNumber = req.query.customerPhoneNumber;
    const customer = await CustomerService.findCustomerByPhoneNumber(phoneNumber);
    if (customer) {
      const response = new ResponseStructure(200, 'Customer found', customer);
      res.status(200).json(response);
    } else {
      const response = new ResponseStructure(404, 'Customer not found');
      res.status(404).json(response);
    }
  } catch (err) {
    const response = new ResponseStructure(400, 'Error fetching customer', err.message);
    res.status(400).json(response);
  }
};

// Find all customers
export const findAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerService.findAllCustomers();
    const response = new ResponseStructure(200, 'Customers retrieved successfully', customers);
    res.status(200).json(response);
  } catch (err) {
    const response = new ResponseStructure(400, 'Error fetching customers', err.message);
    res.status(400).json(response);
  }
};

// Update customer
export const updateCustomer = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const updatedData = req.body;
    const customer = await CustomerService.updateCustomer(customerId, updatedData);
    if (customer) {
      const response = new ResponseStructure(200, 'Customer updated successfully', customer);
      res.status(200).json(response);
    } else {
      const response = new ResponseStructure(404, 'Customer not found');
      res.status(404).json(response);
    }
  } catch (err) {
    const response = new ResponseStructure(400, 'Error updating customer', err.message);
    res.status(400).json(response);
  }
};

// Remove customer by ID
export const removeCustomerById = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const customer = await CustomerService.removeCustomerById(customerId);
    if (customer) {
      const response = new ResponseStructure(204, 'Customer removed successfully');
      res.status(204).json(response);
    } else {
      const response = new ResponseStructure(404, 'Customer not found');
      res.status(404).json(response);
    }
  } catch (err) {
    const response = new ResponseStructure(400, 'Error removing customer', err.message);
    res.status(400).json(response);
  }
};