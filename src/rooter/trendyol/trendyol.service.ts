import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TrendyolService {
  private readonly users: any[] = [];

  constructor(
      @Inject('TRENDYOL') private readonly trendyolClient: ClientProxy,
      @Inject('REDIS_SERVICE') private readonly redisClient: ClientProxy,
  ) {}

  testAccount() {
    return this.trendyolClient.send('testAccount', {});
  }
  serviceTest() {
    return this.trendyolClient.send('serviceTest', {});
  }  
  redisTest() {
    return this.redisClient.send('serviceTest', {});
  }
}
