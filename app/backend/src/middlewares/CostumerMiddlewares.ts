import { Request, Response, NextFunction } from 'express';
import { Ijwt } from '../interfaces/IJwt';

export default class CustomerMiddlewares {
  constructor(private jwt: Ijwt) { 
    this.jwt = jwt;
  }

  validJwt = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      await this.jwt.validJwt(authorization);
      next();
    } catch {
      return res.status(400).json({ message: 'token é inválido' });
    }
  };

  validCostumersName = (req: Request, res: Response, next: NextFunction) => {
    const { obj } = req.body;
    const { name } = obj;
    if (!name || name.length < 6) {
      return res.status(400).json({ message: 'Nome curto ou em branco' });
    }
    if (typeof (name) !== 'string') {
      return res.status(400).json({ message: 'Nome precisa ser string' });
    }
    next();
  };

  validCostumersEmail = (req: Request, res: Response, next: NextFunction) => {
    const { obj } = req.body;
    const { email } = obj;
    if (!email) {
      return res.status(400).json({ message: 'email é obrigatorio' });
    }
    const regexemail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!regexemail.test(email)) {
      return res.status(400).json({ message: 'O email é inválido' });
    }
    next();
  };

  validCostumersAdress = (req: Request, res: Response, next: NextFunction) => {
    const { obj } = req.body;
    const { address } = obj;
    if (!address || address.length < 9) {
      return res.status(400).json({ message: 'Endereço inválido' });
    }
    if (typeof (address) !== 'string') {
      return res.status(400).json({ message: 'Endereço precisa ser string' });
    }
    return next();
  };

  validCostumersphone = (req: Request, res: Response, next: NextFunction) => {
    const { obj } = req.body;
    const { phone } = obj;
    const RegExpTel = /\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}/g;
    if (!RegExpTel.test(phone)) {
      return res.status(400).json({ message: 'Telefone é inválido' });
    }
    return next();
  };

  validCostumersCPF = (req: Request, res: Response, next: NextFunction) => {
    const { obj } = req.body;
    const { cpf } = obj;
    if (!cpf || cpf.length < 8) {
      return res.status(400).json({ message: 'CPF inválido' });
    }
    if (typeof (cpf) !== 'string') {
      return res.status(400).json({ message: 'cpf is string' });
    }
    return next();
  };
}