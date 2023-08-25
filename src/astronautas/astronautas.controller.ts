import { Body, Controller, Post } from '@nestjs/common';
import { AstronautasService } from './astronautas.service';

@Controller('astronautas')
export class AstronautasController{
    constructor(private astronautaService: AstronautasService){}

    @Post()
    async create(@Body() createAstronauta: any){
        return this.astronautaService.create(createAstronauta)
    }
}
