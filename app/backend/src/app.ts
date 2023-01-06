import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import UserRouter from './routes/UserRoute';
import CustumerRouter from './routes/CostumersRoutes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(UserRouter);
app.use(CustumerRouter);

export default app;
