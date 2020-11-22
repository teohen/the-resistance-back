import { logger } from './logger.middleware';
import { CatsModule } from './cats/cats.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterModule } from './character/character.module';
import { GameModule } from './game/game.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/database/db.sqlite',
      autoLoadEntities: true,
    }),
    CharacterModule,
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
