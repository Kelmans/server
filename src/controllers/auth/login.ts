import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserCredentials } from '../../dto/auth/login';
import { LoginService } from '../../services/auth/login';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/')
  async login(@Body() userCredentials: UserCredentials, @Res() res) {
    const response = await this.loginService.loginUser(userCredentials);

    res.json(response);
  }
}
