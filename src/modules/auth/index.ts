import { Module } from '@nestjs/common';
import { LoginService } from '../../services/auth/login';
import { LoginController } from '../../controllers/auth/login';
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../../schemas/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService],
})
export class AuthModule {}
