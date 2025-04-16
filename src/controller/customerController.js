import Customer from '../models/Customer.js';

export const saveCustomerController = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const customerData = { name, email, phoneNumber };
    const customer = await Customer.create(customerData);
    res.status(201).json({ status: 201, message: 'Customer created successfully', data: customer });
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error creating customer', error: err.message });
  }
};

export const findCustomerByIdController = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const customer = await Customer.findByPk(customerId);
    if (customer) {
      res.status(200).json({ status: 200, message: 'Customer found', data: customer });
    } else {
      res.status(404).json({ status: 404, message: 'Customer not found' });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error fetching customer', error: err.message });
  }
};

export const findCustomerByPhoneNumberController = async (req, res) => {
  try {
    const phoneNumber = req.query.customerPhoneNumber;
    const customer = await Customer.findOne({ where: { phoneNumber } });
    if (customer) {
      res.status(200).json({ status: 200, message: 'Customer found', data: customer });
    } else {
      res.status(404).json({ status: 404, message: 'Customer not found' });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error fetching customer', error: err.message });
  }
};

export const findAllCustomersController = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json({ status: 200, message: 'Customers retrieved successfully', data: customers });
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error fetching customers', error: err.message });
  }
};

export const updateCustomerController = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const updatedData = req.body;
    const customer = await Customer.findByPk(customerId);
    if (customer) {
      await customer.update(updatedData);
      res.status(200).json({ status: 200, message: 'Customer updated successfully', data: customer });
    } else {
      res.status(404).json({ status: 404, message: 'Customer not found' });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error updating customer', error: err.message });
  }
};

export const removeCustomerByIdController = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const customer = await Customer.findByPk(customerId);
    if (customer) {
      await customer.destroy();
      res.status(204).json({ status: 204, message: 'Customer removed successfully' });
    } else {
      res.status(404).json({ status: 404, message: 'Customer not found' });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error removing customer', error: err.message });
  }
};