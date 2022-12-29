import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';
import MongoModel from './MongoModel';

const frameMongooseSchema = new Schema<IUser>({
  username: String,
  password: String,
}, { versionKey: false });

class User extends MongoModel<IUser> {
  constructor(model = mongooseCreateModel('users', frameMongooseSchema)) {
    super(model);
  }
}

export default User;
