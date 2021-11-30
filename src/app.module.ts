import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { F1Controller } from './f1/f1.controller';
import { F1Module } from './f1/f1.module';

@Module({
  imports: [
    F1Module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
