/*eslint-disable */
import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CustomersModel from '../../../models/CustomersModel';
import {  CustomerMock,
  CustomerMockId, CustomersMocks, CustomerUpadateMockId } from '../../mocks/CustomersMocks';

describe('Customer Model', function() {
  const Customer = new CustomersModel();

  before(function() {
    sinon.stub(Model, 'create').resolves(CustomerMockId).onCall(1).resolves(null);
    sinon.stub(Model, 'findOne').resolves(CustomerMockId).onCall(1).resolves(null);
    sinon.stub(Model, 'find').resolves(CustomersMocks).onCall(1).resolves([]);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(CustomerUpadateMockId)
    .onCall(1).resolves(null);
    sinon.stub(Model, 'findByIdAndRemove').resolves(CustomerMockId)
    .onCall(1).resolves(null);
  });

  after(function() {
    sinon.restore();
  });

  describe('Criando o cliente', function() {
    it('Cliente Criado', async function() {
      const userFound = await Customer.create(CustomerMock)
      expect(userFound).to.be.deep.equal(CustomerMockId);
    });

    it('Cliente não foi criado', async function() {
      try {
        await Customer.create(CustomerMock);
      } catch (error: any) {
        expect(error.message).to.be.eq('Usuario não encontrado');
      }
    });
  });

  describe('Encontrando o cliente', function() {
    it('Cliente encontrado', async function() {
      const userFound = await Customer.readOneId(CustomerMockId._id)
      expect(userFound).to.be.deep.equal(CustomerMockId);
    });

    it('Cliente não foi encontrado', async function() {
      try {
        await Customer.readOneId(CustomerMockId._id);
      } catch (error: any) {
        expect(error.message).to.be.eq('Usuario não encontrado');
      }
    });
  });

  describe('Encontrando todos os clientes', function() {
    it('Clientes encontrados', async function() {
      const userFound = await Customer.readAll()
      expect(userFound).to.be.deep.equal(CustomersMocks);
    });

    it('Clientes não cadastrados', async function() {
      try {
        await Customer.readAll();
      } catch (error: any) {
        expect(error.message).to.be.eq('Usuario não encontrado');
      }
    });
  });

  describe('Atualizando um cliente', function() {
    it('Clientes atualizado', async function() {
      const userFound = await Customer.update(CustomerUpadateMockId._id,CustomerMock)
      expect(userFound).to.be.deep.equal(CustomerUpadateMockId);
    });

    it('Clientes não atualizado', async function() {
      try {
        await Customer.update('',CustomerMock)
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('verificando  um cliente especifico', function() {
    it('Cliente encontrado', async function() {
      const userFound = await Customer
      .readOneCustumer(CustomerMock.name, CustomerMock.cpf, CustomerMock.email)
      expect(userFound).to.be.deep.equal(CustomerMockId);
    });

    it('Clientes não encontrado', async function() {
      try {
        await Customer.readOneCustumer('213123123123','asdasdasd', 'teste')
      } catch (error: any) {
        expect(error.message).to.be.eq('Usuario não encontrado');
      }
    });
  });

  describe('Deletando  um cliente especifico', function() {
    it('Cliente Deletado', async function() {
      const userFound = await Customer.delete(CustomerMockId._id)
      expect(userFound).to.be.deep.equal(CustomerMockId);
    });

    it('Clientes não encontrado', async function() {
      try {
        await Customer.delete('')
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});
