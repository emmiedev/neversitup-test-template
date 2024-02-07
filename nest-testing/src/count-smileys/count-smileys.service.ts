import {Injectable} from '@nestjs/common';

@Injectable()
export class CountSmileysService {
    countSmileys(smileList: string[]): number {        
        let result = 0
        let eyes = [":", ";"]
        let nose = ["-", "~"]
        let mouth = [")", "D"]

        for (let i = 0; i < smileList.length; i++) {
            let face = smileList[i].split("").filter((char) => char !== " ")
            if (face.length === 2) {
                if (eyes.includes(face[0]) && mouth.includes(face[1])) {
                    result++
                }
            } else if (face.length === 3) {
                if (eyes.includes(face[0]) && nose.includes(face[1]) && mouth.includes(face[2])) {
                    result++
                }
            }
        }

        return result
    }
}