import {  Controller, Get } from '@nestjs/common';
import { TrendyolService } from './trendyol.service';

@Controller()
export class TrendyolController {
  constructor(private readonly trendyolService: TrendyolService) {}

  @Get('trendyol/service_test')
  serviceTest() {
    return this.trendyolService.serviceTest();
  }
  @Get('trendyol/test')
  testAccount() {
    return this.trendyolService.testAccount();
  }
}
