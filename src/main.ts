import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사
  app.useGlobalPipes(new ValidationPipe({
    // 비정상적인 값을 원천 차단
    whitelist:true,
    // 비정상적인 값을 반환해줌
    forbidNonWhitelisted: true,
    // 타입을 받아 넘겨줄때 형식 자동변환
    transform:true,
  }))
  await app.listen(3000);
}
bootstrap();
