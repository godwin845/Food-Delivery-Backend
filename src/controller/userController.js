import User from '../models/userModel.js';

export const saveUserController = async (req, res) => {
  try {
    const userData = req.body;
    const user = await User.create(userData);
    res.status(201).json({
      status: 'Created',
      message: 'User saved successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findByEmailController = async (req, res) => {
  try {
    const email = req.query.email;
    const user = await User.findOne({ where: { email } });
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

export const findByIdController = async (req, res) => {
  try {
    const userId = req.query.userId;
    const user = await User.findByPk(userId);
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

export const findByPhoneNumberController = async (req, res) => {
  try {
    const phoneNumber = req.query.phoneNumber;
    const user = await User.findOne({ where: { phoneNumber } });
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

export const findAllUsersController = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      status: 'OK',
      message: 'Users retrieved successfully',
      data: users
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const { email } = req.query;
    const updatedData = req.body;
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.update(updatedData);

    res.status(200).json({
      status: 'OK',
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeUserController = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();

    res.status(200).json({
      status: 'OK',
      message: 'User removed successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};