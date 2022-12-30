import { sign, SignOptions, decode } from 'jsonwebtoken';
import md5 from 'md5';
// import { JwtPayloadHandler } from '../interfaces/IJwt';
import { IModel } from '../interfaces/IModel';
import { IUser } from '../interfaces/IUser';

export default class CreateJWT {
    private _user:IModel<IUser>;
    constructor(model:IModel<IUser>) {
        this._user = model;
      }

  async createJwt(username: string, password: string) {
    const md5password = md5(password);
    const listUser = await this._user.readOne(username, md5password);
    const secret = String(process.env.JWT_SECRET);
    const signInOptions: SignOptions = {
      algorithm: 'HS256',
      expiresIn: '24h',
    };
    const payload = {
      name: listUser?.username,
    };
    return sign(payload, secret, signInOptions);
  }

//   async validJwt(token: string) {
//     const validToken = decode(token);
//     if (validToken != null) {
//       const { name } = validToken as JwtPayloadHandler;
//       const listUser = await this.model.findOne(name);
//       if (listUser != null) {
//         return listUser.dataValues.username;
//       }
//       return false;
//     }
//     return false;
//   }
}
