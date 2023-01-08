/*eslint-disable */
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import UserModel from '../../../models/Usermodel';
import { UserMock, UserMockId } from '../../mocks/UsersMocks';

describe('User Model', function() {
  const User = new UserModel();

  before(function() {
    sinon.stub(Model, 'findOne').resolves(UserMockId)
      .onCall(1).resolves(null);
  });

  after(function() {
    sinon.restore();
  });

  describe('Encontrando o usuario', function() {
    const { username, password } = UserMock;
    it('Usuario existe', async function() {
      const userFound = await User.readOne(username, password);
      expect(userFound).to.be.deep.equal(UserMockId);
    });

    it('Usuario não existe', async function() {
      try {
        await User.readOne('123ERRADO', 'daleee');
      } catch (error: any) {
        expect(error.message).to.be.eq('Usuario não encontrado');
      }
    });
  });
});
