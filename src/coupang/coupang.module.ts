import { Module } from '@nestjs/common';
import { CoupangService } from './coupang.service';
import { CoupangController } from './coupang.controller';

@Module({
  providers: [CoupangService],
  controllers: [CoupangController]
})
export class CoupangModule {}
