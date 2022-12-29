import express from 'express';
import 'express-async-errors';
import UserRouter from './routes/UserRoute';

const app = express();
app.use(express.json());
app.use(UserRouter);

export default app;
