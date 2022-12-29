import { Router } from 'express';
import IUserController from '../controllers/UserControllers';
import IUserModel from '../models/Usermodel';
import IUserService from '../services/UserService';

const route = Router();
 
const User = new IUserModel();
const UserService = new IUserService(User);
const UserController = new IUserController(UserService);

route.post('/user', (req, res) => UserController.readOne(req, res));

export default route;