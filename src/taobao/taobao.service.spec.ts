import { Test, TestingModule } from '@nestjs/testing';
import { TaobaoService } from './taobao.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('TaobaoService', () => {
  let service: TaobaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.env',
        }),
      ],
      providers: [TaobaoService, ConfigService],
    }).compile();

    await module.init();
    service = module.get<TaobaoService>(TaobaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('GoToPage', () => {
    test('should be opened', async () => {
      await service.login();

      await service.findItem(
        'https://detail.tmall.com/item.htm?id=724229905039&spm=a2141.241046-kr.feeds.2&eurl=http://click.mz.simba.taobao.com/necpm&country=KR&itemIds=724229905039&scm=1007.35313.250647.0',
      );

      const title = await service.getTitle();
      console.log(title);
      const options = await service.getOptions();
      console.log(options);
      const images = await service.getMainImages();
      console.log(images);
      const detail = await service.getContentHtml();
      console.log(detail);

      await service.close();
    }, 1000000);
  });
});
