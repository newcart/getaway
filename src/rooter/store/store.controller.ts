import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly thisService: StoreService) {}
  @Get('service_test')
  serviceTest() {
    return this.thisService.serviceTest();
  }
  @Post('create')
  createStore( @Req() request: Request ) {
    return this.thisService.create(request['data']);
  }
  @Post('remove')
  removeStore( @Req() request: Request ) {
    return this.thisService.remove(request['data']);
  }
}
