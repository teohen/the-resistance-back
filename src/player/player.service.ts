import { CreatePlayerDTO } from './dto/CreatePlayerDTO';
import { Player } from './player.entity';
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {
    constructor(private connection: Connection){}

    async create(createPlayerDTO: CreatePlayerDTO): Promise<Player>{
        return this.connection.manager.save(new Player({...createPlayerDTO}))
    }
}
