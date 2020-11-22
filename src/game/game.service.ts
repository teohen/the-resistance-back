import { Game } from './game.entity';
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateGameDTO } from './dto/CreateGameDTO';
import { util } from './../util';

@Injectable()
export class GameService {
  constructor(private connection: Connection) { }

  async create(createGameDTO: CreateGameDTO) {
    return this.connection.manager.save(
      new Game({ ...createGameDTO, code: util.generateCode() }),
    );
  }
  async findAll(): Promise<Game[]> {
    return await this.connection.manager.find(Game, {
      where: {
        ativo: true,
      },
    });
  }
  async get(id: string): Promise<Game> {
    return await this.connection.manager.findOne(Game, {
      where: {
        id: id,
      },
    });
  }
}
