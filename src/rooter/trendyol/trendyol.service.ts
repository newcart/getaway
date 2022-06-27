import {Inject, Injectable, Post, Req} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TrendyolService {
  constructor(
      @Inject('TRENDYOL') private readonly serviceClient: ClientProxy,
  ){}
  serviceTest() {
    return this.serviceClient.send('serviceTest', {});
  }
  testAccount(body) {
    return this.serviceClient.send('testAccount', body);
  }
  postBrand(body) {
    return this.serviceClient.send('postBrand', body);
  }
  postBrands(body) {
    return this.serviceClient.send('postBrands', body);
  }
  postMaincategories(body) {
    return this.serviceClient.send('postMaincategories', body);
  }
  postCategories(body) {
    return this.serviceClient.send('postCategories', body);
  }
  postCategory(body) {
    return this.serviceClient.send('postCategory', body);
  }
  postCategorySpecs(body) {
    return this.serviceClient.send('postCategorySpecs', body);
  }
  postProduct(body) {
    return this.serviceClient.send('postProduct', body);
  }
  postProducts(body) {
    return this.serviceClient.send('postProducts', body);
  }
  postProductsDelete(body) {
    return this.serviceClient.send('postProductsDelete', body);
  }
  postProductsSave(body) {
    return this.serviceClient.send('postProductsSave', body);
  }
  postProducstUpdate(body) {
    return this.serviceClient.send('postProducstUpdate', body);
  }
  postProductsStokPrice(body) {
    return this.serviceClient.send('postProductsStokPrice', body);
  }
  postOrder(body) {
    return this.serviceClient.send('postOrder', body);
  }
  postOrders(body) {
    return this.serviceClient.send('postOrders', body);
  }
}
