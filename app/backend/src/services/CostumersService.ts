import ICustomerService from '../interfaces/ICustumerService';
import { ICustomers } from '../interfaces/ICustomers';
import { IModel } from '../interfaces/IModel';

class CustomersService implements ICustomerService<ICustomers> { 
  private _costumer:IModel<ICustomers>;
  constructor(model:IModel<ICustomers>) {
    this._costumer = model;
  }

  public async create(obj : ICustomers):Promise<ICustomers | undefined> {
    const {name, email, cpf} = obj
    const Users = await this._costumer.readOneCustumer(name, cpf, email);
    if(!Users) {
      const result = await this._costumer.create(obj);
      return result;
    }
    if (Users) throw new Error('Usuario Já cadastrado');
  }

  public async readAll():Promise<ICustomers[]> {
    const result = await this._costumer.readAll();
    if (!result) throw new Error('nenhum usuario encontrado');
    return result;
  }

  public async update(_id:string, obj:Partial<ICustomers>):Promise<ICustomers> {
    const result = await this._costumer.update(_id, obj);
    if (!result) throw new Error('nenhum usuario encontrado');
    return result;
  }

  public async delete(_id:string):Promise<ICustomers> {
    const result = await this._costumer.delete(_id);
    if (!result) throw new Error('nenhum usuario encontrado');
    return result;
  }
}

export default CustomersService;