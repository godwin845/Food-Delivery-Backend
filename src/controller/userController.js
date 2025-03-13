import userService from '../services/userService.js';

export const saveUser = async (req, res) => {
  try {
    const user = await userService.saveUser(req.body);
    res.status(201).json({
      status: 'Created',
      message: 'User saved successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findByEmail = async (req, res) => {
  try {
    const user = await userService.findByEmail(req.query.email);
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

export const findById = async (req, res) => {
  try {
    const user = await userService.findById(req.query.userId);
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

export const findByPhoneNumber = async (req, res) => {
  try {
    const user = await userService.findByPhoneNumber(req.query.phoneNumber);
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

export const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.status(200).json({
      status: 'OK',
      message: 'Users retrieved successfully',
      data: users
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.query.email, req.body);
    res.status(200).json({
      status: 'OK',
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeUser = async (req, res) => {
  try {
    const message = await userService.removeUser(req.query.email);
    res.status(200).json({
      status: 'OK',
      message: message
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};