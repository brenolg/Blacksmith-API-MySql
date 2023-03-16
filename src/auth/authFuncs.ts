import { sign, verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'Batatinha';

const JWT_CONFIG : object = {
  algorithm: 'HS256',
  expiresIn: '24h',
};

export const createToken = (data: number) => sign({ data }, secret, JWT_CONFIG);

export const verifyToken = (token: string) => verify(token, secret);
