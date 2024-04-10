import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { UserCredentials } from '../../dto/auth/login';
import { LoginService } from '../../services/auth/login';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/')
  async login(@Body() userCredentials: UserCredentials, @Res() res) {
    const response = await this.loginService.loginUser(userCredentials);

    res.json(response);
  }

  @Post('/registration')
  async register() {
    await this.loginService.register();
  }
}
