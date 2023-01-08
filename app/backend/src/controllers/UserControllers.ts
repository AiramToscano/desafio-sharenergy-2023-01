import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IUser } from '../interfaces/IUser';
import { Ijwt } from '../interfaces/IJwt';

export default class UsersController {
  constructor(private service: IService<IUser>, private jwt: Ijwt) { }

  public async readOne(
    req: Request,
    res: Response,
  ) {
    try {
      const { username, password } = req.body;
      await this.service.readOne(username, password);
      const createjwt = await this.jwt.createJwt(username, password);
      return res.status(200).json(createjwt);
    } catch {
      return res.status(400)
        .json({ message: 'Usuario não encontrado ou senha inválida' });
    }
  }
}
