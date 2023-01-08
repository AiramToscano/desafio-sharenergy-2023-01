import { Model, isValidObjectId, UpdateQuery } from 'mongoose';
// import { ErrorTypes } from '../errors/catolog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected model:Model<T>;

  constructor(model:Model<T>) {
    this.model = model;
  }

  public async readOne(username: string, password: string):Promise<T | null> {
    return this.model.findOne({ username, password });
  }

  public async readOneId(_id: string):Promise<T | null> {
    return this.model.findOne({ _id });
  }

  public async readOneCustumer(
    name: string,
    cpf: string,
    email: string,
  ):Promise<T | null> {
    return this.model.findOne({ $or: [{ name }, { cpf }, { email }] });
  }

  public async readUser(username: string):Promise<T | null> {
    return this.model.findOne({ username });
  }

  public async readAll():Promise<T[]> {
    return this.model.find();
  }

  public async create(obj:T):Promise<T> {
    return this.model.create({ ...obj });
  }

  public async update(_id:string, obj:Partial<T>):Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId'); 
    
    const result = this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
    return result;
  }

  public async delete(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this.model.findByIdAndRemove({ _id });
  }
}

export default MongoModel;
