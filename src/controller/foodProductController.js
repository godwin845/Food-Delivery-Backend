import * as FoodProductService from '../services/foodProductService.js';

// POST: Save a new food product
export const saveFoodProduct = async (req, res) => {
    try {
        const foodProduct = await FoodProductService.saveFoodProduct(req.body);
        res.status(201).json({
            status: 201,
            message: 'Food product created successfully',
            data: foodProduct,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

// GET: Find food product by ID
export const findFoodProductById = async (req, res) => {
    try {
        const foodProduct = await FoodProductService.findFoodProductById(req.query.foodProductId);
        res.status(200).json({
            status: 200,
            message: 'Food product retrieved successfully',
            data: foodProduct,
        });
    } catch (error) {
        res.status(404).json({ status: 404, message: error.message });
    }
};

// GET: Find all food products
export const findAllFoodProducts = async (req, res) => {
    try {
        const foodProducts = await FoodProductService.findAllFoodProducts();
        res.status(200).json({
            status: 200,
            message: 'Food products retrieved successfully',
            data: foodProducts,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

// DELETE: Remove food product by ID
export const removeFoodProductById = async (req, res) => {
    try {
        const message = await FoodProductService.removeFoodProductById(req.query.foodProductId);
        res.status(204).json({
            status: 204,
            message: message,
            data: null,
        });
    } catch (error) {
        res.status(404).json({ status: 404, message: error.message });
    }
};