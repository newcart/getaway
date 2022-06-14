import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {NextFunction, Request, Response} from "express";

@Injectable()
export class TrendyolService {
  private readonly users: any[] = [];

  constructor(
      @Inject('TRENDYOL') private readonly trendyolClient: ClientProxy,
  ) {}

  testAccount(body: Body) {
    return this.trendyolClient.send('testAccount', body);
  }
  serviceTest() {
    return this.trendyolClient.send('serviceTest', {});
  }

}
