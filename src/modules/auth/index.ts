import { Module } from '@nestjs/common';
import { LoginService } from '../../services/auth/login';
import { LoginController } from '../../controllers/auth/login';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService],
})
export class AuthModule {}
