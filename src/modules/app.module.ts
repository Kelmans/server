import { Module } from '@nestjs/common';
import { AuthModule } from './auth/index';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { MongooseModule } from '@nestjs/mongoose';

const environment = process.env.NODE_ENV || 'development';
@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
