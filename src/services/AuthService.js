import BaseApiService from './BaseApiService';

class AuthService extends BaseApiService {
  async authUser(body) {
    return this.post({ url: '/signin', body, isPrivate: false });
  }
}

const authService = new AuthService();

export default authService;
