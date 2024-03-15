import { Injectable } from '@nestjs/common';
import { UserCredentials } from '../../dto/auth/login';

@Injectable()
export class LoginService {
  async loginUser(userCredentials: UserCredentials) {
    return {
      message: `Мок авторизация, пользователь: ${userCredentials.email}`,
    };
  }
}
