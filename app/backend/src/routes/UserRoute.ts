import { Router } from 'express';
import IUserController from '../controllers/UserControllers';
import IUserModel from '../models/Usermodel';
import IUserService from '../services/UserService';
import CreateJWT from '../utils/CreateJWT';

const route = Router();
 
const User = new IUserModel();
const Userjwt = new CreateJWT(User)
const UserService = new IUserService(User);
const UserController = new IUserController(UserService, Userjwt);

route.post('/login', (req, res) => UserController.readOne(req, res));

export default route;