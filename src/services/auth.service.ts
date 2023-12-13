import { IAuthSuccess, IUser } from '@interfaces';
import { HttpRequest } from './API.service';

export default class AuthService {
  async signUp(data: IUser) {
    const HttpResponse = await HttpRequest.post<IAuthSuccess>('/auth/sign-up', data);
    return HttpResponse.data;
  }

  async signIn(identity: string, password: string) {
    const HttpResponse = await HttpRequest.post<IAuthSuccess>('/auth/sign-in', {
      identity,
      password,
    });
    return HttpResponse.data;
  }
}
