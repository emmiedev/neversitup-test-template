import { PermutationsService } from './permutations.service';
import { Body, Controller, Post } from '@nestjs/common';
import { word } from './permutations.interface';

@Controller('permutations')
export class PermutationsController {
    constructor(private permutationService: PermutationsService) {}

    @Post()
    getPermutations(@Body() bodyData: word): string[] {
        return this.permutationService.getPermutations(bodyData.word);
    }
}
