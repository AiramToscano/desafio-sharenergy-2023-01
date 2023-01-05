interface ICustomersService<T> {
    create(obj: T): Promise<T | undefined>
    readAll():Promise<T[]>
    update(_id:string, obj:Partial<T>):Promise<T>
    delete(_id:string):Promise<T>
  }
    
  export default ICustomersService;
  