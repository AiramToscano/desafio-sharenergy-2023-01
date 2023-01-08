import ICustomerService from '../interfaces/ICustumerService';
import { ICustomers } from '../interfaces/ICustomers';
import { IModel } from '../interfaces/IModel';

const ErrorMsgNotFound = 'Nenhum usuario encontrado';
const ErrorMsgExist = 'Usuario Já cadastrado';

class CustomersService implements ICustomerService<ICustomers> { 
  private costumer:IModel<ICustomers>;

  constructor(model:IModel<ICustomers>) {
    this.costumer = model;
  }

  public async create(obj : ICustomers):Promise<ICustomers | Error> {
    const { name, email, cpf } = obj;
    const Users = await this.costumer.readOneCustumer(name, cpf, email);
    if (Users) throw new Error(ErrorMsgExist);
    const result = await this.costumer.create(obj);
    return result;
  }

  public async readOne(_id : string):Promise<ICustomers | undefined> {
    const Users = await this.costumer.readOneId(_id);
    if (!Users) {
      throw new Error(ErrorMsgNotFound);
    }
    return Users;
  }

  public async readAll():Promise<ICustomers[]> {
    const result = await this.costumer.readAll();
    return result;
  }

  public async update(_id:string, obj:Partial<ICustomers>):Promise<ICustomers> {
    const resultUpdate = await this.costumer.update(_id, obj);
    if (!resultUpdate) throw new Error(ErrorMsgNotFound);
    return resultUpdate;
  }

  public async delete(_id:string):Promise<ICustomers> {
    const resultDelete = await this.costumer.delete(_id);
    if (!resultDelete) throw new Error(ErrorMsgNotFound);
    return resultDelete;
  }
}

export default CustomersService;