import { Module } from '@nestjs/common';
import { TaobaoService } from './taobao.service';
import { ConfigService } from '@nestjs/config';
import { TaobaoController } from './taobao.controller';

@Module({
  providers: [TaobaoService, ConfigService],
  controllers: [TaobaoController],
})
export class TaobaoModule {}
