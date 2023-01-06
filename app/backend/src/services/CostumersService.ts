import ICustomerService from '../interfaces/ICustumerService';
import { ICustomers } from '../interfaces/ICustomers';
import { IModel } from '../interfaces/IModel';

const ErrorMsgNotFound = 'Nenhum usuario encontrado';
const ErrorMsgExist = 'Usuario Já cadastrado';

class CustomersService implements ICustomerService<ICustomers> { 
  private _costumer:IModel<ICustomers>;
  constructor(model:IModel<ICustomers>) {
    this._costumer = model;
  }

  public async create(obj : ICustomers):Promise<ICustomers | undefined> {
    const { name, email, cpf } = obj;
    const Users = await this._costumer.readOneCustumer(name, cpf, email);
    if (!Users) {
      const result = await this._costumer.create(obj);
      return result;
    }
    if (Users) throw new Error(ErrorMsgExist);
  }

  public async readOne(_id : string):Promise<ICustomers | undefined> {
    const Users = await this._costumer.readOneId(_id);
    if (!Users) {
      throw new Error(ErrorMsgNotFound);
    }
    if (Users) return Users;
  }

  public async readAll():Promise<ICustomers[]> {
    const result = await this._costumer.readAll();
    if (!result) throw new Error(ErrorMsgNotFound);
    return result;
  }

  public async update(_id:string, obj:Partial<ICustomers>):Promise<ICustomers> {
    const resultUpdate = await this._costumer.update(_id, obj);
    if (!resultUpdate) throw new Error(ErrorMsgNotFound);
    return resultUpdate;
  }

  public async delete(_id:string):Promise<ICustomers> {
    const resultDelete = await this._costumer.delete(_id);
    if (!resultDelete) throw new Error(ErrorMsgNotFound);
    return resultDelete;
  }
}

export default CustomersService;