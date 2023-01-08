/*eslint-disable */
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Model } from 'mongoose';
import UserModel from '../../../models/Usermodel';
import UserJwt from '../../../utils/CreateJWT';
import { UserMock, UserMockId } from '../../mocks/UsersMocks';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVzYWZpb3NoYXJlbmVyZ3kiLCJpYXQiOjE2NzMxNDA2NzYsImV4cCI6MTY3MzIyNzA3Nn0.1go4XF7ywM0bW9rsObRSboDbAFn8_Y-PM9xqLWwaHnU'

describe('User JWT', () => {
    const userModel = new UserModel();
    const jwtUser = new UserJwt(userModel);

    before(() => {
        sinon.stub(userModel, 'readOne').resolves(UserMockId)
        sinon.stub(Model, 'findOne').resolves(UserMockId)
    })
    after(() => {
        sinon.restore()
    })

    describe('criando o usuario e gerando um jwt', () => {
        const { username, password } = UserMock
        it('Criando um token', async () => {
            const result = await userModel.readUser(username);
            expect(result).to.be.a('object');
        });

        it('verificando um user', async () => {
            const result = await jwtUser.createJwt(username, password);
            expect(result).to.be.a('string');
        });
    });
});

describe('User JWT', () => {
    const userModel = new UserModel();
    const jwtUser = new UserJwt(userModel);

    before(() => {
        sinon.stub(userModel, 'readUser').resolves(UserMockId)
        .onCall(1).resolves(null);
    })
    after(() => {
        sinon.restore()
    })

    describe('Validando um jwt', () => {
        it('Validando o token', async () => {
            const result = await jwtUser.validJwt(token);
            expect(result).to.be.not.equal(null);
        });

        it('Validando o token', async () => {
            const result = await jwtUser.validJwt(token);
            expect(result).to.be.equal(null);
        });
        it('Validando o token como null', async () => {
            const result = await jwtUser.validJwt('asdasd');
            expect(result).to.be.equal(null);
        });
    });
});