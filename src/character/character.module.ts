import { Character } from './character.entity';
import { CharacterController } from './character.controller';
import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  controllers: [CharacterController],
  providers: [CharacterService],
  exports: [CharacterService]
})

export class CharacterModule {
    constructor(){    }


}