import {  Controller, Get, Post, Req } from '@nestjs/common';
import { PazaramaService } from './pazarama.service';
import { Request  } from "express";

@Controller()
export class PazaramaController {
  constructor(private readonly PazaramaService: PazaramaService) {}
  @Get('pazarama/service_test')
  serviceTest() {
    return this.PazaramaService.serviceTest();
  }
  @Post('pazarama/test')
  testAccount( @Req() request: Request) {
    return this.PazaramaService.testAccount(request.body["data"]);
  }
  @Post('pazarama/brand')
  postBrand( @Req() request: Request) {
    return this.PazaramaService.postBrand(request.body["data"]);
  }
  @Post('pazarama/brands')
  postBrands( @Req() request: Request) {
    return this.PazaramaService.postBrands(request.body["data"]);
  }
  @Post('pazarama/maincategories')
  postMaincategories( @Req() request: Request) {
    return this.PazaramaService.postMaincategories(request.body["data"]);
  }
  @Post('pazarama/categories')
  postCategories( @Req() request: Request) {
    return this.PazaramaService.postCategories(request.body["data"]);
  }
  @Post('pazarama/category')
  postCategory( @Req() request: Request) {
    return this.PazaramaService.postCategory(request.body["data"]);
  }
  @Post('pazarama/category_specs')
  postCategorySpecs( @Req() request: Request) {
    return this.PazaramaService.postCategorySpecs(request.body["data"]);
  }
  @Post('pazarama/product')
  postProduct( @Req() request: Request) {
    return this.PazaramaService.postProduct(request.body["data"]);
  }
  @Post('pazarama/products')
  postProducts( @Req() request: Request) {
    return this.PazaramaService.postProducts(request.body["data"]);
  }
  @Post('pazarama/products-delete')
  postProductsDelete( @Req() request: Request) {
    return this.PazaramaService.postProductsDelete(request.body["data"]);
  }
  @Post('pazarama/products-save')
  postProductsSave( @Req() request: Request) {
    return this.PazaramaService.postProductsSave(request.body["data"]);
  }
  @Post('pazarama/products-update')
  postProducstUpdate( @Req() request: Request) {
    return this.PazaramaService.postProducstUpdate(request.body["data"]);
  }
  @Post('pazarama/products-stok-price')
  postProductsStokPrice( @Req() request: Request) {
    return this.PazaramaService.postProductsStokPrice(request.body["data"]);
  }
  @Post('pazarama/orders')
  postOrders( @Req() request: Request) {
    return this.PazaramaService.postOrders(request.body["data"]);
  }
  @Post('pazarama/order')
  postOrder( @Req() request: Request) {
    return this.PazaramaService.postOrder(request.body["data"]);
  }
}
