import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller(':user_id/store')
export class StoreController {
  constructor(
      private readonly thisService: StoreService,
  ) {}
  @Get('service_test')
  serviceTest() {
    return this.thisService.serviceTest();
  }
  @Post('list')
  serviceList( @Req() request: Request ) {
    return this.thisService.serviceList(request['data']);
  }
  @Post('info')
  serviceInfo( @Req() request: Request ) {
    return this.thisService.serviceInfo(request['data']);
  }
  @Post('save')
  serviceSave( @Req() request: Request ) {
    return this.thisService.serviceSave(request['data']);
  }
}
