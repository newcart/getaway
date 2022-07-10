import { Controller, Get, Post, Req } from '@nestjs/common';
import { TrendyolService } from './trendyol.service';
import { Request } from "express";

@Controller('trendyol')
export class TrendyolController {
  constructor(private readonly TrendyolService: TrendyolService) {}
  @Get('service_test')
  serviceTest() {
    return this.TrendyolService.serviceTest();
  }
  @Post('test')
  testAccount( @Req() request: Request ) {
    return this.TrendyolService.testAccount(request['data']);
  }
  @Post('brand')
  postBrand( @Req() request: Request) {
    return this.TrendyolService.postBrand(request['data']);
  }
  @Post('brands')
  postBrands( @Req() request: Request) {
    return this.TrendyolService.postBrands(request['data']);
  }
  @Post('maincategories')
  postMaincategories( @Req() request: Request) {
    return this.TrendyolService.postMaincategories(request['data']);
  }
  @Post('categories')
  postCategories( @Req() request: Request) {
    return this.TrendyolService.postCategories(request['data']);
  }
  @Post('category')
  postCategory( @Req() request: Request) {
    return this.TrendyolService.postCategory(request['data']);
  }
  @Post('category_specs')
  postCategorySpecs( @Req() request: Request) {
    return this.TrendyolService.postCategorySpecs(request['data']);
  }
  @Post('product')
  postProduct( @Req() request: Request) {
    return this.TrendyolService.postProduct(request['data']);
  }
  @Post('products')
  postProducts( @Req() request: Request) {
    return this.TrendyolService.postProducts(request['data']);
  }
  @Post('products-delete')
  postProductsDelete( @Req() request: Request) {
    return this.TrendyolService.postProductsDelete(request['data']);
  }
  @Post('products-save')
  postProductsSave( @Req() request: Request) {
    return this.TrendyolService.postProductsSave(request['data']);
  }
  @Post('products-update')
  postProducstUpdate( @Req() request: Request) {
    return this.TrendyolService.postProducstUpdate(request['data']);
  }
  @Post('products-stok-price')
  postProductsStokPrice( @Req() request: Request) {
    return this.TrendyolService.postProductsStokPrice(request['data']);
  }
  @Post('orders')
  postOrders( @Req() request: Request) {
    return this.TrendyolService.postOrders(request['data']);
  }
  @Post('order')
  postOrder( @Req() request: Request) {
    return this.TrendyolService.postOrder(request['data']);
  }
}
