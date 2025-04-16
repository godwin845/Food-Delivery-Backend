import express from 'express';
import { 
  saveFoodItemController, 
  findFoodItemByIdController, 
  findByNameController, 
  deleteFoodItemController 
} from '../controller/foodItemController.js';

const router = express.Router();

router.post('/saveFoodItem', saveFoodItemController);
router.get('/findFoodItemById', findFoodItemByIdController);
router.get('/findByName', findByNameController);
router.delete('/deleteFoodItemById', deleteFoodItemController);

export default router;