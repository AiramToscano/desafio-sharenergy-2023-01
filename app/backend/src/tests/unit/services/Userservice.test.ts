/*eslint-disable */
import { expect } from 'chai';
import * as sinon from 'sinon';
import UserModel from '../../../models/Usermodel';
import UserService from '../../../services/UserService';
import { UserMock, UserMockId } from '../../mocks/UsersMocks';

describe('User Service', () => {
	const userModel = new UserModel();
	const userService = new UserService(userModel);

	before(() => {
		sinon.stub(userModel, 'readOne').resolves(UserMockId)
			.onCall(1).resolves(null);
	})
	after(() => {
		sinon.restore()
	})

	describe('Encontrando o usuario', () => {
		const { username, password } = UserMock
		it('Usuario existe', async () => {
			const result = await userService.readOne(username, password);
			expect(result).to.be.deep.equal(UserMockId);
		});
		it('Usuario não existe', async () => {
			try {
				await userService.readOne('123ERRADO', 'daleee');
			} catch (error: any) {
				expect(error.message).to.be.eq('Usuario não encontrado');
			}
		});
	});
});