import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Request, Response } from 'express';
import { AppModule } from '../src/app.module';

let app: INestApplication;

export default async function handler(req: Request, res: Response) {
  if (!app) {
    app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    );
    await app.init();
  }
  const instance = app.getHttpAdapter().getInstance();
  instance(req, res);
}
