import { Request, Response, NextFunction } from 'express';
import { Ijwt } from '../interfaces/IJwt';

export default class CustomerMiddlewares {
  constructor(private jwt: Ijwt) { }

  public async validJwt(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { authorization } = req.headers;
      await this.jwt.validJwt(authorization)
      next();
    }
    catch {
      return res.status(400).json({ message: 'token invalid' });
    }
  }

  public async validCostumersName(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { obj } = req.body;
    const {name} = obj;
      if(!name || name.length < 3 ) {
        return res.status(400).json({ message: 'name is required' });
      }
      if(typeof(name) != 'string') {
        return res.status(400).json({ message: 'name is string' });
      }
      return next();
    }

    public async validCostumersEmail(
      req: Request,
      res: Response,
      next: NextFunction,
    ) {
      const { obj } = req.body;
      const {email} = obj;
        if(!email) {
          return res.status(400).json({ message: 'email is required' });
        }
        const regexemail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if(!regexemail.test(email)) {
          return res.status(400).json({ message: 'email valid' });
        }
        return next();
      }

      public async validCostumersAdress(
        req: Request,
        res: Response,
        next: NextFunction,
      ) {     
        const { obj } = req.body;
        const {address} = obj;
          if(!address || address.length < 3) {
            return res.status(400).json({ message: 'address is required' });
          }
          if(typeof(address) != 'string') {
            return res.status(400).json({ message: 'address is string' });
          }
          return next();
        }
        public async validCostumersphone(
          req: Request,
          res: Response,
          next: NextFunction,
        ) {
          const { obj } = req.body;
          const {phone} = obj;
            if(!phone || phone.length < 8) {
              return res.status(400).json({ message: 'phone is required' });
            }
            if(typeof(phone) != 'string') {
              return res.status(400).json({ message: 'phone is string' });
            }
            return next();
          }
          public async validCostumersCPF(
            req: Request,
            res: Response,
            next: NextFunction,
          ) {
            const { obj } = req.body;
            const {cpf} = obj;
              if(!cpf || cpf.length < 8) {
                return res.status(400).json({ message: 'cpf is required' });
              }
              if(typeof(cpf) != 'string') {
                return res.status(400).json({ message: 'cpf is string' });
              }
              return next();
            }
  }