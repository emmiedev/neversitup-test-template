import { Body, Controller, Post } from '@nestjs/common';
import { CountSmileysService } from './count-smileys.service';
import { CountSmileys } from './count-smileys.interface';

@Controller('countsmileys')
export class CountSmileysController {
    constructor(private countSmileyService: CountSmileysService) {}

    @Post()
    countSmileys(@Body() bodyData: CountSmileys): number {
        return this.countSmileyService.countSmileys(bodyData.smileList);
    }
}
