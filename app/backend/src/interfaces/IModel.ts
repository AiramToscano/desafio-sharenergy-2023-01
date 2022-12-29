export interface IModel <T> {
  readOne(_username: string, _password: string): Promise<T | null>,
}
