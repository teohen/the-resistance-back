import { Game } from './game.entity';
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateGameDTO } from './dto/CreateGameDTO';

@Injectable()
export class GameService {

    constructor(private connection: Connection){}

    async create(createGameDTO: CreateGameDTO){
        console.log('chegou aqui')
        return this.connection.manager.save(Object.assign(new Game(), createGameDTO))
    }
    async findAll(): Promise<Game[]>{
        return await this.connection.manager.find(Game, { where: {
            ativo : true
        } })
    }
}
