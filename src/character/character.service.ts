import { Connection } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from './character.entity';
import { CreateCharacterDTO } from './dto/CreateCharacterDTO';
export class CharacterService {

    constructor(private connection: Connection){

    }

    async create(createCharacterDTO: CreateCharacterDTO): Promise<Character>{
        return await this.connection.manager.save(Object.assign(new Character(), createCharacterDTO))
    }
}