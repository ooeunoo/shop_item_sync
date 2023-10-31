import { Module } from '@nestjs/common';
import { NaverService } from './naver.service';
import { ConfigService } from '@nestjs/config';
import { NaverController } from './naver.controller';

@Module({
  providers: [NaverService, ConfigService],
  controllers: [NaverController],
})
export class NaverModule {}
