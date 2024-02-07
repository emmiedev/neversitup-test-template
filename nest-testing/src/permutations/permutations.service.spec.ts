import { Test, TestingModule } from '@nestjs/testing';
import { PermutationsService } from './permutations.service';

describe('PermutationsService', () => {
  let service: PermutationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermutationsService],
    }).compile();

    service = module.get<PermutationsService>(PermutationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //a
  it('should return permutations of a string', () => {
    const result = service.getPermutations('a');
    expect(result).toEqual(['a']);
  });

  //ab
  it('should return permutations of a string', () => {
    const result = service.getPermutations('ab');
    expect(result).toEqual(['ab', 'ba']);
  });

  //abc
  it('should return permutations of a string', () => {
    const result = service.getPermutations('abc');
    expect(result).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });

  //aabb
  it('should return permutations of a string', () => {
    const result = service.getPermutations('aabb');
    expect(result).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });
  

});
