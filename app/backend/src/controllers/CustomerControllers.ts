import { Request, Response } from 'express';
import ICustomerService from '../interfaces/ICustumerService';
import { ICustomers } from '../interfaces/ICustomers';

export default class CustomerController {
  constructor(private _service: ICustomerService<ICustomers>) { }

  public async create(
    req: Request,
    res: Response,
  ) {
    const {obj} = req.body;
    try {
      await this._service.create(obj);
      return res.status(201).json({message: 'Usuario criado com sucesso'});
    } catch {
      return res.status(400)
        .json({ message: 'Usuario com os campos já cadastrado'});
    }
  }

  public async readAll(
    _req: Request,
    res: Response,
  ) {
    try {
      const customers = await this._service.readAll();
      return res.status(200).json(customers);
    } catch {
      return res.status(400)
        .json({ message: 'não foi possível encontrar nenhum usuario' });
    }
  }

  public async update(
    req: Request,
    res: Response,
  ) {
    try {
      const obj = req.body;
      const { id } = req.params
      const customers = await this._service.update(id, obj);
      return res.status(204).json(customers);
    } catch {
      return res.status(400)
        .json({ message: 'não foi possível atualizar nenhum usuario' });
    }
  }

  public async delete(
    req: Request,
    res: Response,
  ) {
    try {
      const { id } = req.params
      const customers = await this._service.delete(id);
      return res.status(202).json(customers);
    } catch {
      return res.status(400)
        .json({ message: 'não foi possível excluir nenhum usuario' });
    }
  }

}
