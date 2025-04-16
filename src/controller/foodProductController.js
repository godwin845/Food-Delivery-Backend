import FoodProduct from '../models/FoodProduct.js'; // Assuming you have the FoodProduct model set up

// POST: Save a new food product
export const saveFoodProductController = async (req, res) => {
    try {
        const foodProductData = req.body;
        const foodProduct = await FoodProduct.create(foodProductData); // Using Sequelize .create()
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
        const foodProductId = req.query.foodProductId;
        const foodProduct = await FoodProduct.findByPk(foodProductId); // Using Sequelize .findByPk()

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

// GET: Find all food products
export const findAllFoodProductsController = async (req, res) => {
    try {
        const foodProducts = await FoodProduct.findAll(); // Using Sequelize .findAll()
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
        const foodProductId = req.query.foodProductId;
        const foodProduct = await FoodProduct.findByPk(foodProductId); // Using Sequelize .findByPk()

        if (!foodProduct) {
            return res.status(404).json({
                status: 404,
                message: 'Food product not found',
            });
        }

        await foodProduct.destroy(); // Using Sequelize .destroy() to delete the product
        res.status(204).json({
            status: 204,
            message: 'Food product removed successfully',
            data: null,
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
    }
};