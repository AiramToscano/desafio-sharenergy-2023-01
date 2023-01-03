import { JwtPayload } from 'jsonwebtoken';

export interface JwtPayloadHandler extends JwtPayload {
  name: string;
}

export interface Ijwt {
  createJwt(username: string, password: string):Promise<string>
  validJwt(token: string | undefined):Promise<boolean>
}