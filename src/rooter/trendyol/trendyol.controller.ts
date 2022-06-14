import {  Controller, Get, Post, Req } from '@nestjs/common';
import { TrendyolService } from './trendyol.service';
import { Request  } from "express";

@Controller()
export class TrendyolController {
  constructor(private readonly trendyolService: TrendyolService) {}

  @Get('trendyol/service_test')
  serviceTest() {
    return this.trendyolService.serviceTest();
  }
  @Post('trendyol/test')
  testAccount( @Req() request: Request) {
    return this.trendyolService.testAccount(request.body["data"]);
  }
}
