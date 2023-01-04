import { Router } from 'express';
import ICustomerController from '../controllers/CustomerControllers';
import ICustomerModel from '../models/CustomersModel';
import IUserModel from '../models/Usermodel';
import CustomerMiddlewares from '../middlewares/CostumerMiddlewares';
import ICustumerService from '../services/CostumersService';
import CreateJWT from '../utils/CreateJWT';

const route = Router();
 
const Customer = new ICustomerModel();
const User = new IUserModel();
const Customerjwt = new CreateJWT(User);
const middlewares = new CustomerMiddlewares(Customerjwt)
const CustomerService = new ICustumerService(Customer);
const CustomerController = new ICustomerController(CustomerService);

route.post('/customers',
(req, res, next) => middlewares.validJwt(req, res, next),
(req, res, next) => middlewares.validCostumersName(req, res, next),
(req, res, next) => middlewares.validCostumersCPF(req, res, next),
(req, res, next) => middlewares.validCostumersEmail(req, res, next),
(req, res, next) => middlewares.validCostumersphone(req, res, next),
(req, res, next) => middlewares.validCostumersAdress(req, res, next),
(req, res) => CustomerController.create(req, res),
);

route.get('/customers', (req, res) => CustomerController.readAll(req, res));

route.put('/customers/:id',
(req, res, next) => middlewares.validJwt(req, res, next),
(req, res) => CustomerController.update(req, res),
);

route.delete('/customers/:id',
(req, res, next) => middlewares.validJwt(req, res, next),
(req, res) => CustomerController.delete(req, res),
);

export default route;