import { ICustomers } from '../../interfaces/ICustomers';

const CustomerMock: ICustomers = {
  name: 'airam toscano',
  email: 'airamlobato@gmail.com',
  cpf: '123.4123.41.-24',
  phone: '+55 (65) 98150-4918',
  address: 'rua vasco n803',
};

const CustomerMockId: ICustomers & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  name: 'airam toscano',
  email: 'airamlobato@gmail.com',
  cpf: '123.4123.41.-24',
  phone: '65981504918',
  address: 'rua vasco n803',
};

const CustomerUpadateMockId: ICustomers & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  name: 'airam toscano',
  email: 'airamlobato@gmail.com',
  cpf: '123.4123.41.-24',
  phone: '65981504918',
  address: 'rua vasco n803',
};

const CustomersMocks: ICustomers[] = [
{
  name: 'airam toscano',
  email: 'airamlobato@gmail.com',
  cpf: '123.4123.41.-24',
  phone: '65981504918',
  address: 'rua vasco n803',
}, 
{
  name: 'aira toscano',
  email: 'airalobato@gmail.com',
  cpf: '123.4123213.41.-24',
  phone: '65981504918',
  address: 'rua vasco n803',
}];

export {
  CustomerMock,
  CustomerMockId,
  CustomersMocks,
  CustomerUpadateMockId
};