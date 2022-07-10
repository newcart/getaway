import { Controller, Get, Post, Req } from '@nestjs/common';
import { StoreService } from './store.service';
import { Request } from "express";

@Controller()
export class StoreController {
  constructor(private readonly StoreService: StoreService) {}
  @Get('store/service_test')
  serviceTest() {
    return this.StoreService.serviceTest();
  }
  @Post('store/create')
  createStore( @Req() request: Request ) {
    return this.StoreService.create(request['data']);
  }
  @Post('store/remove')
  removeStore( @Req() request: Request ) {
    return this.StoreService.remove(request['data']);
  }

}
