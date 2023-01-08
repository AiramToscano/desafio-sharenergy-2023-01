import md5 from 'md5';
import IService from '../interfaces/IService';
import { IUser } from '../interfaces/IUser';
import { IModel } from '../interfaces/IModel';

class UserService implements IService<IUser> { 
  private user:IModel<IUser>;

  constructor(model:IModel<IUser>) {
    this.user = model;
  }

  public async readOne(_username:string, _password:string):Promise<IUser> {
    const md5password = md5(_password);
    const result = await this.user.readOne(_username, md5password);
    if (!result) throw new Error('Usuario não encontrado');
    return result;
  }
}

export default UserService;
