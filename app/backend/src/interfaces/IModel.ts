export interface IModel <T> {
  readOne(_username: string, _password: string): Promise<T | null>,
  readUser(_username: string): Promise<T | null>,
}