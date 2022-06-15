import { Controller, Get, Post, Req } from '@nestjs/common';
import { TrendyolService } from './trendyol.service';
import { Request } from "express";

@Controller()
export class TrendyolController {
  constructor(private readonly TrendyolService: TrendyolService) {}
  @Get('trendyol/service_test')
  serviceTest() {
    return this.TrendyolService.serviceTest();
  }
  @Post('trendyol/test')
  testAccount( @Req() request: Request ) {
    return this.TrendyolService.testAccount(request['data']);
  }
  @Post('trendyol/brand')
  postBrand( @Req() request: Request) {
    return this.TrendyolService.postBrand(request['data']);
  }
  @Post('trendyol/brands')
  postBrands( @Req() request: Request) {
    return this.TrendyolService.postBrands(request['data']);
  }
  @Post('trendyol/maincategories')
  postMaincategories( @Req() request: Request) {
    return this.TrendyolService.postMaincategories(request['data']);
  }
  @Post('trendyol/categories')
  postCategories( @Req() request: Request) {
    return this.TrendyolService.postCategories(request['data']);
  }
  @Post('trendyol/category')
  postCategory( @Req() request: Request) {
    return this.TrendyolService.postCategory(request['data']);
  }
  @Post('trendyol/category_specs')
  postCategorySpecs( @Req() request: Request) {
    return this.TrendyolService.postCategorySpecs(request['data']);
  }
  @Post('trendyol/product')
  postProduct( @Req() request: Request) {
    return this.TrendyolService.postProduct(request['data']);
  }
  @Post('trendyol/products')
  postProducts( @Req() request: Request) {
    return this.TrendyolService.postProducts(request['data']);
  }
  @Post('trendyol/products-delete')
  postProductsDelete( @Req() request: Request) {
    return this.TrendyolService.postProductsDelete(request['data']);
  }
  @Post('trendyol/products-save')
  postProductsSave( @Req() request: Request) {
    return this.TrendyolService.postProductsSave(request['data']);
  }
  @Post('trendyol/products-update')
  postProducstUpdate( @Req() request: Request) {
    return this.TrendyolService.postProducstUpdate(request['data']);
  }
  @Post('trendyol/products-stok-price')
  postProductsStokPrice( @Req() request: Request) {
    return this.TrendyolService.postProductsStokPrice(request['data']);
  }
  @Post('trendyol/orders')
  postOrders( @Req() request: Request) {
    return this.TrendyolService.postOrders(request['data']);
  }
  @Post('trendyol/order')
  postOrder( @Req() request: Request) {
    return this.TrendyolService.postOrder(request['data']);
  }
}
