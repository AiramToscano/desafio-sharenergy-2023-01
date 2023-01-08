/*eslint-disable */
import { expect } from 'chai';
import * as sinon from 'sinon';
import CustomerModel from '../../../models/CustomersModel';
import CustomerService from '../../../services/CustumersService';
import {
    CustomerMock,
    CustomerMockId,
    CustomersMocks,
    CustomerUpadateMockId
} from '../../mocks/CustomersMocks';

describe('Customer Service', () => {
    const Customermodel = new CustomerModel();
    const Customerservice = new CustomerService(Customermodel);

    before(() => {
        sinon.stub(Customermodel, 'create').resolves(CustomerMockId)
        sinon.stub(Customermodel, 'readOneCustumer').resolves(null)
            .onCall(1).resolves(CustomerMockId);
        sinon.stub(Customermodel, 'readOneId').resolves(CustomerMockId)
            .onCall(1).resolves(null);
        sinon.stub(Customermodel, 'readAll').resolves(CustomersMocks)
            .onCall(1).resolves(undefined);
        sinon.stub(Customermodel, 'update').resolves(CustomerUpadateMockId)
            .onCall(1).resolves(null);
        sinon.stub(Customermodel, 'delete').resolves(CustomerMockId)
            .onCall(1).resolves(null);
    })
    after(() => {
        sinon.restore()
    })

    describe('Criando um cliente', () => {
        it('Cliente existe', async () => {
            const result = await Customerservice.create(CustomerMock);
            expect(result).to.be.deep.equal(CustomerMockId);
        });
        it('Cliente não existe', async () => {
            try {
                await Customerservice.create(CustomerMock)
            } catch (error: any) {
                expect(error.message).to.be.eq('Usuario Já cadastrado');
            }
        });
    });

    describe('Buscando um cliente', () => {
        it('cliente existe', async () => {
            const result = await Customerservice.readOne(CustomerMockId._id);
            expect(result).to.be.deep.equal(CustomerMockId);
        });
        it('cliente não existe', async () => {
            try {
                await Customerservice.readOne('sdasdasd')
            } catch (error: any) {
                expect(error.message).to.be.eq('Nenhum usuario encontrado');
            }
        });
    });

    describe('Buscando varios clientes', () => {
        it('clientes existem', async () => {
            const result = await Customerservice.readAll();
            expect(result).to.be.deep.equal(CustomersMocks);
        });
        it('clientes não existem', async () => {
            try {
                await Customerservice.readAll()
            } catch (error: any) {
                expect(error.message).to.be.eq('Nenhum usuario encontrado');
            }
        });
    });

    describe('Atualizando um cliente', () => {
        it('cliente atualizado', async () => {
            const result = await Customerservice
                .update(CustomerMockId._id, CustomerMockId);
            expect(result).to.be.deep.equal(CustomerUpadateMockId);
        });
        it('cliente não existe', async () => {
            try {
                await Customerservice.update('1231231', CustomerMockId);
            } catch (error: any) {
                expect(error.message).to.be.eq('Nenhum usuario encontrado');
            }
        });
    });

    describe('Deletando um clientes', () => {
        it('clientes deletado', async () => {
            const result = await Customerservice.delete(CustomerMockId._id);
            expect(result).to.be.deep.equal(CustomerMockId);
        });
        it('clientes não existe', async () => {
            try {
                await Customerservice.delete('2313123');
            } catch (error: any) {
                expect(error.message).to.be.eq('Nenhum usuario encontrado');
            }
        });
    });
});