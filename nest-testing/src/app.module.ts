import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermutationsController } from './permutations/permutations.controller';
import { PermutationsService } from './permutations/permutations.service';
import { FindOddIntController } from './find-odd-int/find-odd-int.controller';
import { FindOddIntService } from './find-odd-int/find-odd-int.service';
import { CountSmileysController } from './count-smileys/count-smileys.controller';
import { CountSmileysService } from './count-smileys/count-smileys.service';

@Module({
  imports: [],
  controllers: [AppController, PermutationsController, FindOddIntController, CountSmileysController],
  providers: [AppService, PermutationsService, FindOddIntService, CountSmileysService],
})
export class AppModule {}
