interface IService<T> {
  readOne(_username:string, _password:string):Promise<T>
}
  
export default IService;
