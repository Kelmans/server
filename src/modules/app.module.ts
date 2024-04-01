import { Module } from '@nestjs/common';
import { AuthModule } from './auth/index';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'vlad-app',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
