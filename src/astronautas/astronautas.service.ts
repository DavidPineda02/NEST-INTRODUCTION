import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Astronauta } from './schemas/astronautas.schema';
import { Model } from 'mongoose';

@Injectable()
export class AstronautasService{
    constructor(
        @InjectModel(Astronauta.name) private astronautaModel: Model<Astronauta>
    ){}

    async create(astronauta:any){
        const createdAstronauta = new this.astronautaModel(astronauta);
        return createdAstronauta.save()
    }
}
