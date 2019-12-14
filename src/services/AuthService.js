import BaseApiService from './BaseApiService';
import LocalStorageService from './LocalStorageService';

const localStorageService = new LocalStorageService();

class AuthService extends BaseApiService {
  async authUser(body) {
    return this.post({ url: '/signin', body, isPrivate: false });
  }

  // eslint-disable-next-line class-methods-use-this
  clearAuthData() {
    ['authToken', 'avatar', 'username'].forEach(field =>
      localStorageService.removeItem(field)
    );
  }
}

const authService = new AuthService();

export default authService;
