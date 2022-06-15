import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PazaramaService {

  constructor(
      @Inject('PAZARAMA') private readonly serviceClient: ClientProxy,
  ) {}

  serviceTest() {
    return this.serviceClient.send('serviceTest', {});
  }
  testAccount(body: Body) {
    return this.serviceClient.send('testAccount', body);
  }
  postBrand(body: Body) {
    return this.serviceClient.send('postBrand', body);
  }
  postBrands(body: Body) {
    return this.serviceClient.send('postBrands', body);
  }
  postMaincategories(body: Body) {
    return this.serviceClient.send('postMaincategories', body);
  }
  postCategories(body: Body) {
    return this.serviceClient.send('postCategories', body);
  }
  postCategory(body: Body) {
    return this.serviceClient.send('postCategory', body);
  }
  postCategorySpecs(body: Body) {
    return this.serviceClient.send('postCategorySpecs', body);
  }
}
