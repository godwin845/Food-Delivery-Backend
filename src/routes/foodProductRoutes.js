import express from 'express';
import * as FoodProductController from '../controller/foodProductController.js';

const router = express.Router();

// Routes
router.post('/saveFoodProduct', FoodProductController.saveFoodProduct);
router.get('/findFoodProductByID', FoodProductController.findFoodProductById);
router.get('/findAllFoodProduct', FoodProductController.findAllFoodProduct);
router.delete('/removeFoodProductById', FoodProductController.removeFoodProductById);

export default router;