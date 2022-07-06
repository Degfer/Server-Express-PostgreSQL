import express from 'express';
import userController from '../controller/user.controller'; 

const router = express.Router();

router.post('/user', userController.createUser);
router.get('/user', userController.getUser);
router.get('/user/:id', userController.getOneUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);


export default router;