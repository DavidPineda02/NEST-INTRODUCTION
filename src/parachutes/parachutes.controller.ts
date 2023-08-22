import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParachutesService } from './parachutes.service';
import { CreateParachuteDto } from './dto/create-parachute.dto';
import { UpdateParachuteDto } from './dto/update-parachute.dto';

@Controller('parachutes')
export class ParachutesController {
  constructor(private readonly parachutesService: ParachutesService) {}

  @Post()
  create(@Body() createParachuteDto: CreateParachuteDto) {
    return this.parachutesService.create(createParachuteDto);
  }

  @Get()
  findAll() {
    return this.parachutesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parachutesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParachuteDto: UpdateParachuteDto) {
    return this.parachutesService.update(+id, updateParachuteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parachutesService.remove(+id);
  }
}
