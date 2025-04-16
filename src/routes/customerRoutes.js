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

router.post('/saveCustomerFoodItemDao', saveCustomerController);
router.get('/findCustomerById', findCustomerByIdController);
router.get('/findCustomerByPhoneNumber', findCustomerByPhoneNumberController);
router.get('/findAllCustomer', findAllCustomersController);
router.put('/updateCustomer', updateCustomerController);
router.delete('/removeCustomerById', removeCustomerByIdController);

export default router;