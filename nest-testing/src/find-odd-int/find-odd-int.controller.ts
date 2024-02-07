import { Body, Controller, Post } from '@nestjs/common';
import { FindOddIntService } from './find-odd-int.service';
import { inputNumber } from './find-odd-int.interface';

@Controller('oddnumber')
export class FindOddIntController {
    constructor(private findOddService: FindOddIntService) {}

    @Post()
    findOddInt(@Body() bodyData: inputNumber): number {        
        if (bodyData.numberList.length === 0) {
            return 0;
        }
        return this.findOddService.findOddInt(bodyData.numberList);
    }

}
