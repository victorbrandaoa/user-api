import express from 'express';

import * as controller from '../controllers/status';

const router = express.Router();

router.get('', controller.getStatus);

export default router;
