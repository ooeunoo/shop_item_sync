import { Test, TestingModule } from '@nestjs/testing';
import { CoupangController } from './coupang.controller';

describe('CoupangController', () => {
  let controller: CoupangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoupangController],
    }).compile();

    controller = module.get<CoupangController>(CoupangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
