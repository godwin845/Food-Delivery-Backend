import express from 'express';
import {
  saveFoodOrderController,
  findFoodOrderByIdController,
  findAllFoodOrdersController,
  deleteFoodOrderByIdController
} from '../controller/foodOrderController.js';

const router = express.Router();

// Define routes and associate them with controller functions
router.post('/food-order', saveFoodOrderController);  // POST to save a food order
router.get('/food-order/:id', findFoodOrderByIdController);  // GET to find a food order by ID
router.get('/food-orders', findAllFoodOrdersController);  // GET to find all food orders
router.delete('/food-order/:id', deleteFoodOrderByIdController);  // DELETE to remove a food order by ID

export default router;