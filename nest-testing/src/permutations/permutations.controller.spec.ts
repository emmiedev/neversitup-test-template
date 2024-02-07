import { Test, TestingModule } from '@nestjs/testing';
import { PermutationsController } from './permutations.controller';

describe('PermutationsController', () => {
  let controller: PermutationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermutationsController],
    }).compile();

    controller = module.get<PermutationsController>(PermutationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
