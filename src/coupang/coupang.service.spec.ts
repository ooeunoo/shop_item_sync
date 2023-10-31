import { Test, TestingModule } from '@nestjs/testing';
import { CoupangService } from './coupang.service';

describe('CoupangService', () => {
  let service: CoupangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoupangService],
    }).compile();

    service = module.get<CoupangService>(CoupangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
