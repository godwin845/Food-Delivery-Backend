import FoodProduct from '../models/FoodProduct.js';

export const saveFoodProductController = async (req, res) => {
    try {
        const foodProductData = req.body;
        const foodProduct = await FoodProduct.create(foodProductData);
        res.status(201).json({
            status: 201,
            message: 'Food product created successfully',
            data: foodProduct,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

export const findFoodProductByIdController = async (req, res) => {
    try {
        const foodProductId = req.query.foodProductId;
        const foodProduct = await FoodProduct.findByPk(foodProductId);

        if (!foodProduct) {
            return res.status(404).json({
                status: 404,
                message: 'Food product not found',
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Food product retrieved successfully',
            data: foodProduct,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

export const findAllFoodProductsController = async (req, res) => {
    try {
        const foodProducts = await FoodProduct.findAll();
        res.status(200).json({
            status: 200,
            message: 'Food products retrieved successfully',
            data: foodProducts,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};

export const removeFoodProductByIdController = async (req, res) => {
    try {
        const foodProductId = req.query.foodProductId;
        const foodProduct = await FoodProduct.findByPk(foodProductId);

        if (!foodProduct) {
            return res.status(404).json({
                status: 404,
                message: 'Food product not found',
            });
        }

        await foodProduct.destroy();
        res.status(204).json({
            status: 204,
            message: 'Food product removed successfully',
            data: null,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};