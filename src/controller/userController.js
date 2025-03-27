import { 
  saveUser as saveUserService, 
  findByEmail as findByEmailService, 
  findById as findByIdService, 
  findByPhoneNumber as findByPhoneNumberService, 
  findAllUsers as findAllUsersService, 
  updateUser as updateUserService, 
  removeUser as removeUserService 
} from '../services/userService.js';

export const saveUserController = async (req, res) => {
  try {
    const user = await saveUserService(req.body);
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
    const user = await findByEmailService(req.query.email);
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
    const user = await findByIdService(req.query.userId);
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
    const user = await findByPhoneNumberService(req.query.phoneNumber);
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
    const users = await findAllUsersService();
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
    const user = await updateUserService(req.query.email, req.body);
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
    const message = await removeUserService(req.query.email);
    res.status(200).json({
      status: 'OK',
      message: message
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};