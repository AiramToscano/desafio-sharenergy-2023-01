interface ICustomersService<T> {
    create(obj: T): Promise<T>
    readAll():Promise<T[]>
    update(_id:string, obj:Partial<T>):Promise<T>
    delete(_id:string):Promise<T>
  }
    
  export default ICustomersService;
  