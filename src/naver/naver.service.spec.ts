import { Test, TestingModule } from '@nestjs/testing';
import { NaverService } from './naver.service';
import { ConfigModule } from '@nestjs/config';

describe('NaverService', () => {
  let service: NaverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env',
        }),
      ],
      providers: [NaverService],
    }).compile();

    await module.init();

    service = module.get<NaverService>(NaverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
