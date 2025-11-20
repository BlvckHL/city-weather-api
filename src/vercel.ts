import 'tsconfig-paths/register';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Request, Response } from 'express';
import { AppModule } from './app.module';
import { configureApp } from './configure-app';
import './instrument';

let server: express.Express | null = null;

async function bootstrapServer() {
  if (!server) {
    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    const app = await NestFactory.create(AppModule, adapter, {
      logger: ['log', 'error', 'warn', 'debug', 'verbose'],
    });
    configureApp(app);
    await app.init();
    server = app.getHttpAdapter().getInstance();
  }

  return server;
}

export default async function handler(req: Request, res: Response) {
  const app = await bootstrapServer();
  return app(req, res);
}

