import express from 'express';

import { statusRouter, userRouter, loginRouter } from './app/routes';

const app = express();

app.use(express.json());

app.use('/status', statusRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

app.listen(3333);
