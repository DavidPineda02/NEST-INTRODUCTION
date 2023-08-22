import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParachutesModule } from './parachutes/parachutes.module';

@Module({
  imports: [ParachutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
