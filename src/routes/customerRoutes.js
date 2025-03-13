// routes/customerRoutes.js
import express from 'express';
import CustomerController from '../controller/customerController.js';

const router = express.Router();

// Save Customer
router.post('/saveCustomerFoodItemDao', CustomerController.saveCustomer);

// Find Customer by ID
router.get('/findCustomerById', CustomerController.findCustomerById);

// Find Customer by Phone Number
router.get('/findCustomerByPhoneNumber', CustomerController.findCustomerByPhoneNumber);

// Find All Customers
router.get('/findAllCustomer', CustomerController.findAllCustomers);

// Update Customer
router.put('/updateCustomer', CustomerController.updateCustomer);

// Remove Customer
router.delete('/removeCustomerById', CustomerController.removeCustomerById);

export default router;