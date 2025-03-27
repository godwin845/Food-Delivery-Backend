import { saveFoodProduct, findFoodProductById, findAllFoodProducts, removeFoodProductById } from '../services/foodProductService.js';

// POST: Save a new food product
export const saveFoodProductController = async (req, res) => {
    try {
        const foodProduct = await saveFoodProduct(req.body); // Use the imported function directly
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
export const findFoodProductByIdController = async (req, res) => {
    try {
        const foodProduct = await findFoodProductById(req.query.foodProductId); // Use the imported function directly
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
export const findAllFoodProductsController = async (req, res) => {
    try {
        const foodProducts = await findAllFoodProducts(); // Use the imported function directly
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
export const removeFoodProductByIdController = async (req, res) => {
    try {
        const message = await removeFoodProductById(req.query.foodProductId); // Use the imported function directly
        res.status(204).json({
            status: 204,
            message: message,
            data: null,
        });
    } catch (error) {
        res.status(404).json({ status: 404, message: error.message });
    }
};