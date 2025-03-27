import express from 'express';
import { 
  saveCustomerController, 
  findCustomerByIdController, 
  findCustomerByPhoneNumberController, 
  findAllCustomersController, 
  updateCustomerController, 
  removeCustomerByIdController 
} from '../controller/customerController.js';

const router = express.Router();

// Save Customer
router.post('/saveCustomerFoodItemDao', saveCustomerController);

// Find Customer by ID
router.get('/findCustomerById', findCustomerByIdController);

// Find Customer by Phone Number
router.get('/findCustomerByPhoneNumber', findCustomerByPhoneNumberController);

// Find All Customers
router.get('/findAllCustomer', findAllCustomersController);

// Update Customer
router.put('/updateCustomer', updateCustomerController);

// Remove Customer
router.delete('/removeCustomerById', removeCustomerByIdController);

export default router;