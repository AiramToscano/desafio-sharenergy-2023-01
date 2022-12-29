import md5 from 'md5';
import IService from '../interfaces/IService';
import { IUser } from '../interfaces/IUser';
import { IModel } from '../interfaces/IModel';

class UserService implements IService<IUser> { 
  private _user:IModel<IUser>;
  constructor(model:IModel<IUser>) {
    this._user = model;
  }

  public async readOne(_username:string, _password:string):Promise<IUser> {
    const md5password = md5(_password);
    const result = await this._user.readOne(_username, md5password);
    if (!result) throw new Error('Usuario não encontrado');
    return result;
  }
}

export default UserService;
