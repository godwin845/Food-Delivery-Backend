import express from 'express';
import foodOrderController from '../controller/foodOrderController.js';

const router = express.Router();

// Save a food order
router.post('/saveFoodOrder', foodOrderController.saveFoodOrder);

// Find a food order by ID
router.get('/findFoodOrderByID/:id', foodOrderController.findFoodOrderById);

// Find all food orders
router.get('/findAllFoodOrders', foodOrderController.findAllFoodOrders);

// Delete a food order by ID
router.delete('/deleteFoodOrderByID/:id', foodOrderController.deleteFoodOrderById);

export default router;