import { CreateCharacterDTO } from './dto/CreateCharacterDTO';
import { Controller, Post, Body } from "@nestjs/common";
import { CharacterService } from "./character.service";


@Controller('character')
export class CharacterController {
    constructor(private characterService: CharacterService){}

    @Post()
    async create(@Body() createCharacterDTO: CreateCharacterDTO){
        try{
            return await this.characterService.create(createCharacterDTO)
        }catch(err){
            console.log(err)
        }
    }
}