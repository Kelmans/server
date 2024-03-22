import { Module } from '@nestjs/common';
import { AuthModule } from './auth/index';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from "../controllers/auth/users.module";

const environment = process.env.NODE_ENV || 'development';
@Module({
  imports: [
    AuthModule,

    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
