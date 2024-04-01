import { Injectable, Logger } from '@nestjs/common';
import { UserCredentials } from '../../dto/auth/login';
import { User } from '../../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class LoginService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async loginUser(userCredentials: UserCredentials) {
    return {
      message: `Мок авторизация, пользователь: ${userCredentials.email}`,
    };
  }

  async register() {
    const createdUser = new this.userModel({
      first_name: 'Vlad',
      last_name: 'Some',
      email: 'email',
    });

    console.log(createdUser);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    Logger.log('This action returns all USERS');
    return this.userModel.find();
  }
}
