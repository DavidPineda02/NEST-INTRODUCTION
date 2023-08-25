import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ParachutesModule } from './parachutes/parachutes.module';
import { AstronautasModule } from './astronautas/astronautas.module';

@Module({
  imports: [ParachutesModule,MongooseModule.forRoot('mongodb+srv://AstronautasUser:12345@astronautascluster.llkcsil.mongodb.net/astronautasDB'), AstronautasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
