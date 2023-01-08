/*eslint-disable */
import { expect } from 'chai';
import request from 'supertest';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { UserMock, UserMockId } from '../../mocks/UsersMocks';
import UserController from '../../../controllers/UserControllers';
import UserService from '../../../services/UserService';
import UserModel from '../../../models/Usermodel';
import CreateJWT from '../../../utils/CreateJWT';
const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVzYWZpb3NoYXJlbmVyZ3kiLCJpYXQiOjE2NzI4NDcxODQsImV4cCI6MTY3MjkzMzU4NH0.AUUjodSvmpOybQTIOMT7kBUT4qV4ZFXrMdapEVUj2a0'
const userModel = new UserModel()
const Userjwt = new CreateJWT(userModel);
const userService = new UserService(userModel);
const userController = new UserController(userService, Userjwt);
const req = {} as Request;
const res = {} as Response;

describe('User Controller', () => {
  before(async () => {
    req.body
    sinon.stub(userService, 'readOne').resolves(undefined).onFirstCall()
    sinon.stub(Userjwt, 'createJwt').resolves(jwt)
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })
  it('Error', async () => {
    try {
      await userController.readOne(req, res);
    } catch (err){
      expect((res.status as sinon.SinonStub).calledWith(404)).to.be.true;
    }
  });
});

describe('User Controller', () => {
  before(async () => {
    req.body = {}
    sinon.stub(userService, 'readOne').resolves(UserMockId).onFirstCall()
    sinon.stub(Userjwt, 'createJwt').resolves(jwt)
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })
  it('Success', async () => {
      await userController.readOne(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
  });
});