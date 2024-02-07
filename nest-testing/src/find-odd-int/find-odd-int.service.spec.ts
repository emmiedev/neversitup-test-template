import { Test, TestingModule } from '@nestjs/testing';
import { FindOddIntService } from './find-odd-int.service';

describe('FindOddIntService', () => {
  let service: FindOddIntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOddIntService],
    }).compile();

    service = module.get<FindOddIntService>(FindOddIntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('should return 1 when numbers is [7]', () => {
    expect(service.findOddInt([7])).toEqual(7);
  });

  test('should return 0 when numbers is [0]', () => {
    expect(service.findOddInt([0])).toEqual(0);
  });

  test('should return 2 when numbers is [1,1,2]', () => {
    expect(service.findOddInt([1, 1, 2])).toEqual(2);
  });

  test('should return 0 when numbers is [0,1,0,1,0]', () => {
    expect(service.findOddInt([0, 1, 0, 1, 0])).toEqual(0);
  });

  test('should return 4 when numbers is [1,2,2,3,3,3,4,3,3,3,2,2,1]', () => {
    expect(service.findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toEqual(4);
  });

  test('should return 0 when numbers is []', () => {
    expect(service.findOddInt([])).toEqual(0);
  });
  
});
