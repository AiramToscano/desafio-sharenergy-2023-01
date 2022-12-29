import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IUser } from '../interfaces/IUser';

export default class CarController {
  constructor(private _service: IService<IUser>) { }

  public async readOne(
    req: Request,
    res: Response,
  ) {
    const { username, password } = req.body;
    try {
      const result = await this._service.readOne(username, password);
      return res.status(200).json(result);
    } catch {
      return res.status(400)
        .json({ message: 'Usuario não encontrado ou senha inválida' });
    }
  }
}
