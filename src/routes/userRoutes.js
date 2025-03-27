import express from 'express';
import { 
    saveUserController, 
    findByEmailController, 
    findByIdController, 
    findByPhoneNumberController, 
    findAllUsersController, 
    updateUserController, 
    removeUserController 
} from '../controller/userController.js';

const router = express.Router();

router.post('/saveUser', saveUserController);
router.get('/findById', findByIdController);
router.get('/findByEmail', findByEmailController);
router.get('/findByNumber', findByPhoneNumberController);
router.get('/findAllUser', findAllUsersController);
router.put('/updateUser', updateUserController);
router.delete('/deleteUser', removeUserController);

export default router;