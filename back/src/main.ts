import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

  const PORT = process.env.port || 5000;
  await app.listen(PORT);

  console.info(`Application Running On: ${await app.getUrl()}`);
}
bootstrap();
