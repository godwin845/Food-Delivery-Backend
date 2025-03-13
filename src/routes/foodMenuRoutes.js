import express from 'express';
import { 
  saveFoodMenuController, 
  findFoodMenuByIdController, 
  findAllFoodMenusController, 
  removeFoodMenuByIdController, 
  updateFoodMenuController, 
  updateFoodProductController 
} from '../controller/foodMenuController.js';

const router = express.Router();

// Save a food menu
router.post('/saveFoodMenu', saveFoodMenuController);

// Find a food menu by ID
router.get('/findFoodMenuById', findFoodMenuByIdController);

// Find all food menus
router.get('/findAllFoodMenu', findAllFoodMenusController);

// Remove food menu by ID
router.delete('/deleteFoodMenu', removeFoodMenuByIdController);

// Update a food menu
router.put('/updateFoodMenu', updateFoodMenuController);

// Update food menu by staff
router.put('/updateFoodMenuByStaff', updateFoodProductController);

export default router;