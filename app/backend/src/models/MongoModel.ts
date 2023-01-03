import { Model } from 'mongoose';
// import { ErrorTypes } from '../errors/catolog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async readOne(username: string, password: string):Promise<T | null> {
    return this._model.findOne({ username, password });
  }

  public async readUser(username: string):Promise<T | null> {
    return this._model.findOne({ username });
  }
}

export default MongoModel;
