import { Module } from '@nestjs/common';
import { AuthModule } from './auth/index';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from "../schemas/user.schema";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'test',
    }),
    AuthModule,
  ],
})
export class AppModule {}
