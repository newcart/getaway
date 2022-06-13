import { Body, Controller, Get,  UseGuards } from '@nestjs/common';
import { TrendyolService } from './trendyol.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class TrendyolController {
  constructor(private readonly trendyolService: TrendyolService) {}

  @UseGuards(AuthGuard('local'))
  @Get('trendyol/test')
  testAccount() {
    return this.trendyolService.testAccount();
  }
}
