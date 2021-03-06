import express from 'express';

import StatusController from '../controllers/status';

const router = express.Router();

router.get('', StatusController.getStatus);

export default router;
