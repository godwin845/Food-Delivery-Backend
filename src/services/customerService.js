import Customer from '../models/Customer.js';

export const saveCustomer = async (customerData) => {
  try {
    const customer = await Customer.create(customerData);
    return customer;
  } catch (error) {
    throw new Error('Error creating customer: ' + error.message);
  }
};

export const findCustomerById = async (customerId) => {
  try {
    const customer = await Customer.findByPk(customerId);
    return customer;
  } catch (error) {
    throw new Error('Error fetching customer by ID: ' + error.message);
  }
};

export const findCustomerByPhoneNumber = async (phoneNumber) => {
  try {
    const customer = await Customer.findOne({ where: { phoneNumber } });
    return customer;
  } catch (error) {
    throw new Error('Error fetching customer by phone number: ' + error.message);
  }
};

export const findAllCustomers = async () => {
  try {
    const customers = await Customer.findAll();
    return customers;
  } catch (error) {
    throw new Error('Error fetching all customers: ' + error.message);
  }
};

export const updateCustomer = async (customerId, updatedData) => {
  try {
    const [updatedRowCount, updatedCustomers] = await Customer.update(updatedData, {
      where: { id: customerId },
      returning: true,
    });
    return updatedCustomers[0];
  } catch (error) {
    throw new Error('Error updating customer: ' + error.message);
  }
};

export const removeCustomerById = async (customerId) => {
  try {
    const deletedRowCount = await Customer.destroy({
      where: { id: customerId }
    });
    return deletedRowCount;
  } catch (error) {
    throw new Error('Error deleting customer: ' + error.message);
  }
};