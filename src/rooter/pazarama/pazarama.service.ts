import {Inject, Injectable, Post, Req} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PazaramaService {
  constructor(
      @Inject('PAZARAMA') private readonly serviceClient: ClientProxy,
  ){}
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
  postProduct(body: Body) {
    return this.serviceClient.send('postProduct', body);
  }
  postProducts(body: Body) {
    return this.serviceClient.send('postProducts', body);
  }
  postProductsDelete(body: Body) {
    return this.serviceClient.send('postProductsDelete', body);
  }
  postProductsSave(body: Body) {
    return this.serviceClient.send('postProductsSave', body);
  }
  postProducstUpdate(body: Body) {
    return this.serviceClient.send('postProducstUpdate', body);
  }
  postProductsStokPrice(body: Body) {
    return this.serviceClient.send('postProductsStokPrice', body);
  }
  postOrder(body: Body) {
    return this.serviceClient.send('postOrder', body);
  }
  postOrders(body: Body) {
    return this.serviceClient.send('postOrders', body);
  }
}
