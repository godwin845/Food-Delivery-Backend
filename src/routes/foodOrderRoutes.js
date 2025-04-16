import express from 'express';
import {
  saveFoodOrderController,
  findFoodOrderByIdController,
  findAllFoodOrdersController,
  deleteFoodOrderByIdController
} from '../controller/foodOrderController.js';

const router = express.Router();

router.post('/food-order', saveFoodOrderController);
router.get('/food-order/:id', findFoodOrderByIdController);
router.get('/food-orders', findAllFoodOrdersController);
router.delete('/food-order/:id', deleteFoodOrderByIdController);

export default router;