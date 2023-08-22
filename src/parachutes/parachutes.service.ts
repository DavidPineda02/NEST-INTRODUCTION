import { Injectable } from '@nestjs/common';
import { CreateParachuteDto } from './dto/create-parachute.dto';
import { UpdateParachuteDto } from './dto/update-parachute.dto';

@Injectable()
export class ParachutesService {
  create(createParachuteDto: CreateParachuteDto) {
    return 'This action adds a new parachute';
  }

  findAll() {
    return `This action returns all parachutes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parachute`;
  }

  update(id: number, updateParachuteDto: UpdateParachuteDto) {
    return `This action updates a #${id} parachute`;
  }

  remove(id: number) {
    return `This action removes a #${id} parachute`;
  }
}
