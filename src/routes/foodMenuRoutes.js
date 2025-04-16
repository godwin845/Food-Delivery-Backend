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

router.post('/saveFoodMenu', saveFoodMenuController);
router.get('/findFoodMenuById', findFoodMenuByIdController);
router.get('/findAllFoodMenu', findAllFoodMenusController);
router.delete('/deleteFoodMenu', removeFoodMenuByIdController);
router.put('/updateFoodMenu', updateFoodMenuController);
router.put('/updateFoodMenuByStaff', updateFoodProductController);

export default router;