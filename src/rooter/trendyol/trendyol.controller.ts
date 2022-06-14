import { Body, Controller, Get,  UseGuards } from '@nestjs/common';
import { TrendyolService } from './trendyol.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class TrendyolController {
  constructor(private readonly trendyolService: TrendyolService) {}
  @Get('trendyol/service_test')
  serviceTest() {
    return this.trendyolService.serviceTest();
  }
  @Get('trendyol/redis')
  serviceTest() {
    return this.trendyolService.redisTest();
  }
  @UseGuards(AuthGuard('local'))
  @Get('trendyol/test')
  testAccount() {
    return this.trendyolService.testAccount();
  }
}
