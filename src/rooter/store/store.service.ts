import {Inject, Injectable, Post, Req} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StoreService {
  constructor(
      @Inject('STORE') private readonly serviceClient: ClientProxy,
  ){}
  serviceTest() {
    return this.serviceClient.send('serviceTest', {});
  }
  serviceList(body) {
    return this.serviceClient.send('list', body);
  }
  serviceInfo(body) {
    return this.serviceClient.send('info', body);
  }
  serviceSave(body) {
    return this.serviceClient.send('save', body);
  }
}
