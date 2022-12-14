import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './database/database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const databaseService = app.get(DatabaseService);
  await databaseService.enableShutdownHooks(app);
  app.useGlobalPipes(new ValidationPipe());
  await app.setGlobalPrefix('/api');
  await app.listen(3001);
}
bootstrap();
