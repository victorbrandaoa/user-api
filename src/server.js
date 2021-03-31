import express from 'express';
import dotenv from 'dotenv';

import { statusRouter, userRouter, loginRouter } from './app/routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/status', statusRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

app.listen(process.env.API_PORT);
