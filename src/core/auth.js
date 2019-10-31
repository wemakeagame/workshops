import { users } from "./user.mock";
class Auth {
  constructor() {
    this.hasAuth = false;
    this.userData = {};
  }

  login(credential, callback) {
    const userData = users.find(
      u =>
        credential.username === u.username && credential.password === u.password
    );

    if (userData) {
      this.hasAuth = true;
      this.userData = userData;
    }

    callback(this.hasAuth);
  }

  logout(callback) {
    this.hasAuth = false;
    callback();
  }

  isAuthenticated() {
    return this.hasAuth;
  }

  getUserData() {
    return this.userData;
  }
}

export default new Auth();
