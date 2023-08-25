import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ParachutesModule } from './parachutes/parachutes.module';

@Module({
  imports: [ParachutesModule,MongooseModule.forRoot('mongodb+srv://AstronautasUser:12345@astronautascluster.llkcsil.mongodb.net/astronautasDB')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
