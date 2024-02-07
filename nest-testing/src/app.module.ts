import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermutationsController } from './permutations/permutations.controller';
import { PermutationsService } from './permutations/permutations.service';

@Module({
  imports: [],
  controllers: [AppController, PermutationsController],
  providers: [AppService, PermutationsService],
})
export class AppModule {}
