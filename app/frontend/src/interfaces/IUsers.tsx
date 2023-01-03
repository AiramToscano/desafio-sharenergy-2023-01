export interface IUsers {
    image?: string,
    picture?: {medium : string}
    name?: {title: string, first: string, last: string},
    email?: string,
    dob?: {age: string},
    id?: string,
    login: { username: string},
}
