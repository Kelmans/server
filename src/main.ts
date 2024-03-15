import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000', // Тут URL, на котором крутится фронтенд приложение
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
  });

  await app.listen(3001); // На этом порте будет крутиться бэкенд
}
bootstrap();
