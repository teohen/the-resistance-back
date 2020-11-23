import { CreateGameDTO } from './dto/CreateGameDTO';
import { GameService } from './game.service';
import { Body, Controller, Post, Get, Param } from '@nestjs/common';

@Controller('game')
export class GameController {
  constructor(private gameservice: GameService) { }

  @Post()
  async create(@Body() createGameDTO: CreateGameDTO) {
    return await this.gameservice.create(createGameDTO);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    console.log('id', id)
    return this.gameservice.get(id);
  }
}
