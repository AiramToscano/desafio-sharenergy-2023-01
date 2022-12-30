import express from 'express';
const cors = require('cors');
import 'express-async-errors';
import UserRouter from './routes/UserRoute';

const app = express();
app.use(express.json());
app.use(cors());
app.use(UserRouter);

export default app;
