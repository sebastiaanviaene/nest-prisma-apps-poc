import { NestFactory } from '@nestjs/core';
import { MyApp2Module } from './my-app2.module';

async function bootstrap() {
  const app = await NestFactory.create(MyApp2Module);
  await app.listen(3000);
}
bootstrap();
