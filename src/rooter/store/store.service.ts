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
  create(body) {
    return this.serviceClient.send('create', body);
  }
  remove(body) {
    return this.serviceClient.send('remove', body);
  }
}
