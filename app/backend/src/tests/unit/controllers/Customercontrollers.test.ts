/*eslint-disable */
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import CustomerController from '../../../controllers/CustomerControllers';
import CustomerService from '../../../services/CustumersService';
import CustomerModel from '../../../models/CustomersModel';
import CreateJWT from '../../../utils/CreateJWT';
import UserModel from '../../../models/Usermodel';
import {
    CustomerMock,
    CustomerMockId,
    CustomersMocks,
    CustomerUpadateMockId
} from '../../mocks/CustomersMocks';

describe('Customer Controller Create', () => {
    const customerModel = new CustomerModel()
    const userModel = new UserModel()
    const customerjwt = new CreateJWT(userModel);
    const customerService = new CustomerService(customerModel);
    const customerController = new CustomerController(customerService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.body = {}
        sinon.stub(customerService, 'create').resolves(CustomerMock);
        sinon.stub(customerjwt, 'validJwt').resolves(true)
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cliente Criado', async () => {
        await customerController.create(req, res);
        expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    });
});

describe('Customer Controller Create', () => {
    const customerModel = new CustomerModel()
    const userModel = new UserModel()
    const customerjwt = new CreateJWT(userModel);
    const customerService = new CustomerService(customerModel);
    const customerController = new CustomerController(customerService);
    const req = {} as Request;
    const res = {} as Response;
    before(async () => {
        sinon.stub(customerService, 'create').resolves(undefined).onFirstCall()
        sinon.stub(customerjwt, 'validJwt').resolves(true)
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(() => {
        sinon.restore()
    })
    it('Cliente não criado', async () => {
        await customerController.create(req, res);
        expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
    });
});

describe('Customer Controller Delete', () => {
    const customerModel = new CustomerModel()
    const userModel = new UserModel()
    const customerjwt = new CreateJWT(userModel);
    const customerService = new CustomerService(customerModel);
    const customerController = new CustomerController(customerService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.params = { id: '324234' }
        sinon.stub(customerService, 'delete').resolves(CustomerMock);
        sinon.stub(customerjwt, 'validJwt').resolves(true)
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cliente deletado', async () => {
        await customerController.delete(req, res);
        expect((res.status as sinon.SinonStub).calledWith(202)).to.be.true;
    });
});

describe('Customer Controller Delete', () => {
    const customerModel = new CustomerModel()
    const userModel = new UserModel()
    const customerjwt = new CreateJWT(userModel);
    const customerService = new CustomerService(customerModel);
    const customerController = new CustomerController(customerService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        sinon.stub(customerService, 'delete').resolves(CustomerMock);
        sinon.stub(customerjwt, 'validJwt').resolves(true)
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cliente Não deletado', async () => {
        await customerController.delete(req, res);
        expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
    });
});

describe('Customer Controller Update', () => {
    const customerModel = new CustomerModel()
    const userModel = new UserModel()
    const customerjwt = new CreateJWT(userModel);
    const customerService = new CustomerService(customerModel);
    const customerController = new CustomerController(customerService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.params = { id: '324234' }
        req.body = {}
        sinon.stub(customerService, 'update').resolves(CustomerMock);
        sinon.stub(customerjwt, 'validJwt').resolves(true)
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cliente atualizado', async () => {
        await customerController.update(req, res);
        expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
});

describe('Customer Controller Update', () => {
    const customerModel = new CustomerModel()
    const userModel = new UserModel()
    const customerjwt = new CreateJWT(userModel);
    const customerService = new CustomerService(customerModel);
    const customerController = new CustomerController(customerService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.body = {}
        sinon.stub(customerService, 'update').resolves(CustomerMock);
        sinon.stub(customerjwt, 'validJwt').resolves(true)
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cliente não atualizado', async () => {
        await customerController.update(req, res);
        expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
    });
});

describe('Customer Controller ReadOne', () => {
    const customerModel = new CustomerModel()
    const userModel = new UserModel()
    const customerjwt = new CreateJWT(userModel);
    const customerService = new CustomerService(customerModel);
    const customerController = new CustomerController(customerService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.body = {}
        sinon.stub(customerService, 'readOne').resolves(CustomerMock);
        sinon.stub(customerjwt, 'validJwt').resolves(true)
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cliente encontrado', async () => {
        await customerController.readOne(req, res);
        expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    });
});

describe('Customer Controller ReadOne', () => {
    const customerModel = new CustomerModel()
    const userModel = new UserModel()
    const customerjwt = new CreateJWT(userModel);
    const customerService = new CustomerService(customerModel);
    const customerController = new CustomerController(customerService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        sinon.stub(customerService, 'readOne').resolves(CustomerMock);
        sinon.stub(customerjwt, 'validJwt').resolves(true)
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Cliente não encontrado', async () => {
        await customerController.readOne(req, res);
        expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
    });
});

describe('Customer Controller readAll', () => {
    const customerModel = new CustomerModel()
    const userModel = new UserModel()
    const customerjwt = new CreateJWT(userModel);
    const customerService = new CustomerService(customerModel);
    const customerController = new CustomerController(customerService);
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
        req.body = {}
        sinon.stub(customerService, 'readAll').resolves(CustomersMocks);
        sinon.stub(customerjwt, 'validJwt').resolves(true)
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns(res);
    });

    after(async () => {
        sinon.restore()
    });

    it('Clientes encontrados', async () => {
        await customerController.readAll(req, res);
        expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
});