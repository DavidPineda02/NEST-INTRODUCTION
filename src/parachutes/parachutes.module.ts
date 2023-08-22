import { Module } from '@nestjs/common';
import { ParachutesService } from './parachutes.service';
import { ParachutesController } from './parachutes.controller';

@Module({
  controllers: [ParachutesController],
  providers: [ParachutesService],
})
export class ParachutesModule {}
