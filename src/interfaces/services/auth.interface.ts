import { IUser } from '@interfaces';

export interface IAuthSuccess {
  user: IUser;
  token: string;
}
