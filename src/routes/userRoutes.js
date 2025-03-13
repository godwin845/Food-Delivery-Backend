import express from 'express';
import userController from '../controller/userController.js';

const router = express.Router();

router.post('/saveUser', userController.saveUser);
router.get('/findById', userController.findById);
router.get('/findByEmail', userController.findByEmail);
router.get('/findByNumber', userController.findByPhoneNumber);
router.get('/findAllUser', userController.findAllUsers);
router.put('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.removeUser);

export default router;