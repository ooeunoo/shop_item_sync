import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의되어있지않으면 자동 제거
      transform: true, // 필드의 타입이 일치하지않으면 자동 형변환
      transformOptions: {
        enableImplicitConversion: true, // 문자열에서 숫자, 불리언 또는 배열로 암시적 변환 가능 (ex, "10" => 10)
      },
    }),
  );

  await app.listen(3000);
}

bootstrap();
