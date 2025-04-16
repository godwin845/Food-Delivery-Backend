import User from '../models/userModel.js'; // Import the User model from Sequelize

// POST: Save a new user
export const saveUserController = async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.create(userData); // Sequelize create method
    res.status(201).json({
      status: 'Created',
      message: 'User saved successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Find user by email
export const findByEmailController = async (req, res) => {
  try {
    const email = req.query.email;
    const user = await User.findOne({ where: { email } }); // Sequelize findOne method
    if (user) {
      res.status(200).json({
        status: 'OK',
        message: 'User found',
        data: user
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Find user by ID
export const findByIdController = async (req, res) => {
  try {
    const userId = req.query.userId;
    const user = await User.findByPk(userId); // Sequelize findByPk method (primary key)
    if (user) {
      res.status(200).json({
        status: 'OK',
        message: 'User found',
        data: user
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Find user by phone number
export const findByPhoneNumberController = async (req, res) => {
  try {
    const phoneNumber = req.query.phoneNumber;
    const user = await User.findOne({ where: { phoneNumber } }); // Sequelize findOne method
    if (user) {
      res.status(200).json({
        status: 'OK',
        message: 'User found',
        data: user
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Find all users
export const findAllUsersController = async (req, res) => {
  try {
    const users = await User.findAll(); // Sequelize findAll method
    res.status(200).json({
      status: 'OK',
      message: 'Users retrieved successfully',
      data: users
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT: Update a user
export const updateUserController = async (req, res) => {
  try {
    const { email } = req.query;
    const updatedData = req.body;
    const user = await User.findOne({ where: { email } }); // Find the user by email
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user with the new data
    await user.update(updatedData); // Sequelize update method

    res.status(200).json({
      status: 'OK',
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE: Remove a user
export const removeUserController = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ where: { email } }); // Find the user by email

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
    await user.destroy(); // Sequelize destroy method

    res.status(200).json({
      status: 'OK',
      message: 'User removed successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};