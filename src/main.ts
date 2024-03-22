import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient('mongodb://127.0.0.1:27017/');
async function run() {
  try {
    // Подключаемся к серверу
    await mongoClient.connect();
    console.log('Подключение установлено');
    const db = mongoClient.db('test');
    const collection = db.collection('users');
    const count = await collection.countDocuments();
    console.log(count, 'count');
  } catch (err) {
    console.log(err);
  } finally {
    // Закрываем подключение при завершении работы или при ошибке
    await mongoClient.close();
    console.log('Подключение закрыто');
  }
}
run().catch(console.log);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:8080', // Тут URL, на котором крутится фронтенд приложение
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
  });

  await app.listen(3001); // На этом порте будет крутиться бэкенд
}
bootstrap();
