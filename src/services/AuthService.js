import BaseApiService from './BaseApiService';

class AuthService extends BaseApiService {
  async authUser({ username }) {
    return this.post('/signin', { username });
  }
}

const authService = new AuthService();

export default authService;
