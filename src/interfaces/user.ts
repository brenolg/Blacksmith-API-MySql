export interface IUser {
  id?: number;
  username: string;
  vocation?: string;
  level?: number ;
  password: string; 
}

export interface Ilogin {
  username: string,
  password?: string,
}
