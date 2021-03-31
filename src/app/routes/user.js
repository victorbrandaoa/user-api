import express from 'express';

import UserController from '../controllers/userController';
import Authentication from '../middlewares/auth';

const router = express.Router();

router.post('', UserController.postUser);

router.use(Authentication.verifyToken);

router.get('', UserController.getAllUsers);
router.get('/:email', UserController.getUser);
router.put('/:email', UserController.putUser);
router.delete('/:email', UserController.deleteUser);

export default router;
