import { Character } from './character/character.entity';
import { logger } from './logger.middleware';
import { CatsModule } from './cats/cats.module';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterModule } from "./character/character.module";
import { GameModule } from './game/game.module';
import { PlayerModule } from './player/player.module';


@Module({
  imports: [CatsModule,
    TypeOrmModule.forRoot({
    "type": "sqlite",
    "database": "./src/database/db.sqlite",
    autoLoadEntities: true,
  }),
  CharacterModule,
  GameModule,
  PlayerModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(logger).forRoutes({path: 'cats', method: RequestMethod.GET});
  }
}
