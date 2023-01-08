import { IUser } from '../../interfaces/IUser';

const UserMock: IUser = {
  username: 'airamtoscano',
  password: 'lobato123',
};

const UserMockId: IUser & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  username: 'airamtoscano',
  password: '2e7062bdb5ff95fefbf5f6b9f2dc7f7b',
};

export {
  UserMock,
  UserMockId,
};
