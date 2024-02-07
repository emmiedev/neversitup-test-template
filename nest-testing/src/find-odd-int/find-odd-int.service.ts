import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOddIntService {
    findOddInt(arr: number[]): number {        
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            result = result ^ arr[i]
        }        
        return result
    }
}



