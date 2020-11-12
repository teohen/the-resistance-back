import { CatService } from './cat.service'
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto/index';

@Controller('cats')
export class CatController {

  constructor(private catService: CatService) {

  }


  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto)
  }

  @Get()
  findAll(@Query() query) {
    return this.catService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
