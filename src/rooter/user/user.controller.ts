import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from "express";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('user/get')
  serviceTest() {
    return this.userService.serviceTest();
  }
  @Post('user/test')
  testAccount( @Req() request: Request ) {
    return this.userService.testAccount(request['data']);
  }
}
