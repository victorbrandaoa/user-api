import express from 'express';

import UserController from '../controllers/userController';

const router = express.Router();

router.get('', UserController.getAllUsers);
router.get('/:email', UserController.getUser);
router.post('', UserController.postUser);
router.patch('/:email', UserController.putUser);
router.delete('/:email', UserController.deleteUser);

export default router;
