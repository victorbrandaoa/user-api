import express from 'express';

import {statusRouter, userRouter} from './app/routes';

const app = express();

app.use(express.json());

app.use('/status', statusRouter);
app.use('/users', userRouter);

app.listen(3333, () => console.log('Running...'));
