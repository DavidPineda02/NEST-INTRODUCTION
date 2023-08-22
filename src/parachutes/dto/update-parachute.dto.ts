import { PartialType } from '@nestjs/mapped-types';
import { CreateParachuteDto } from './create-parachute.dto';

export class UpdateParachuteDto extends PartialType(CreateParachuteDto) {}
