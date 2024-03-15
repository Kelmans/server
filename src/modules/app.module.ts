import { Module } from '@nestjs/common';
import { AuthModule } from './auth/index';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
