import express from 'express';

import router from './app/routes/status'

const app = express();

app.use('/status', router);

app.listen(3333, () => console.log('Running...'));
