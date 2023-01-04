import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICustomers } from '../interfaces/ICustomers';
import MongoModel from './MongoModel';

const frameMongooseSchema = new Schema<ICustomers>({
  name: String,
  cpf: String,
  adress: String,
  email: String,
  phone: String,
}, { versionKey: false });

class User extends MongoModel<ICustomers> {
  constructor(model = mongooseCreateModel('customers', frameMongooseSchema)) {
    super(model);
  }
}

export default User;