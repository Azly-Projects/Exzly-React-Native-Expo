import { HttpRequest } from './API.service';

export default class UsersService {
  async search() {
    const HttpResponse = await HttpRequest.get('/users');
    return HttpResponse.data;
  }
}
