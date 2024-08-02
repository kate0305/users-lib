import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { DEFAULT_PORT } from './shared/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? DEFAULT_PORT;
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, skipMissingProperties: true }),
  );
  await app.listen(port);
}
bootstrap();
