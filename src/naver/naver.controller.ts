import { Body, Controller, Post } from '@nestjs/common';
import { ROUTE } from './naver.constant';
import { NaverService } from './naver.service';
import { CreateProductDto } from './dto/create_product.dto';

@Controller(ROUTE.root)
export class NaverController {
  constructor(private readonly naverService: NaverService) {}

  @Post()
  public async createProduct(@Body() body: CreateProductDto) {
    const result = await this.naverService.createProduct(body);
    return result;
  }
}
