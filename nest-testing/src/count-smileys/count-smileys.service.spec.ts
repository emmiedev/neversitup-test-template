import { Test, TestingModule } from '@nestjs/testing';
import { CountSmileysService } from './count-smileys.service';

describe('CountSmileysService', () => {
  let service: CountSmileysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountSmileysService],
    }).compile();

    service = module.get<CountSmileysService>(CountSmileysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 0 when input smileList is empty', () => {
    expect(service.countSmileys([])).toBe(0);
  });

  it('should return 2 when input smileList is [":)", ";(", ";}"," :-D"]', () => {
    expect(service.countSmileys([":)", ";(", ";}"," :-D"])).toBe(2);
  });

  it('should return 3 when input smileList is [";D", ":-(", ":-)", ";~)"]', () => {
    expect(service.countSmileys([";D", ":-(", ":-)", ";~)"])).toBe(3);
  });

  it('should return 1 when input smileList is [";]", ":[", ";*", ":$", ";-D"]', () => {
    expect(service.countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });
  
});
