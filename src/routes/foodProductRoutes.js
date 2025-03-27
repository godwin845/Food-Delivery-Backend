import express from 'express';
import { 
    saveFoodProductController, 
    findFoodProductByIdController, 
    findAllFoodProductsController, 
    removeFoodProductByIdController 
} from '../controller/foodProductController.js';

const router = express.Router();

// Routes
router.post('/saveFoodProduct', saveFoodProductController);
router.get('/findFoodProductByID', findFoodProductByIdController);
router.get('/findAllFoodProduct', findAllFoodProductsController);
router.delete('/removeFoodProductById', removeFoodProductByIdController);

export default router;