import Customer from '../models/Customer.js'; // assuming you have a Customer model

// Save customer
export const saveCustomerController = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const customerData = { name, email, phoneNumber };
    const customer = await Customer.create(customerData);  // Using Sequelize's create method
    res.status(201).json({ status: 201, message: 'Customer created successfully', data: customer });
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error creating customer', error: err.message });
  }
};

// Find customer by ID
export const findCustomerByIdController = async (req, res) => {
  try {
    const customerId = req.query.customerId;
    const customer = await Customer.findByPk(customerId);  // Using Sequelize's findByPk method
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
    const customer = await Customer.findOne({ where: { phoneNumber } });  // Using Sequelize's findOne method
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
    const customers = await Customer.findAll();  // Using Sequelize's findAll method
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
    const customer = await Customer.findByPk(customerId);  // Find the customer by primary key
    if (customer) {
      await customer.update(updatedData);  // Using Sequelize's update method
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
    const customer = await Customer.findByPk(customerId);  // Find the customer by primary key
    if (customer) {
      await customer.destroy();  // Using Sequelize's destroy method
      res.status(204).json({ status: 204, message: 'Customer removed successfully' });
    } else {
      res.status(404).json({ status: 404, message: 'Customer not found' });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Error removing customer', error: err.message });
  }
};