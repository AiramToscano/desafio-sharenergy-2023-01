export interface IModel <T> {
  readOne(_username: string, _password: string): Promise<T | null>,
  readUser(_username: string): Promise<T | null>,
  create(obj:T):Promise<T>,
  readOneCustumer(name: string, cpf: string, email: string):Promise<T | null>,
  update(_id:string, obj:Partial<T>):Promise<T | null>,
  delete(_id:string):Promise<T | null>,
  readAll():Promise<T[]>,
  readOneId(_id: string):Promise<T | null>,
}