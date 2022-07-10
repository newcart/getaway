import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { PazaramaService } from './pazarama.service';

@Controller('pazarama')
export class PazaramaController {
  constructor(private readonly thisService: PazaramaService) {}
  @Get('service_test')
  serviceTest() {
    return this.thisService.serviceTest();
  }
  @Post('test')
  testAccount( @Req() request: Request ) {
    return this.thisService.testAccount(request['data']);
  }
  @Post('brand')
  postBrand( @Req() request: Request) {
    return this.thisService.postBrand(request['data']);
  }
  @Post('brands')
  postBrands( @Req() request: Request) {
    return this.thisService.postBrands(request['data']);
  }
  @Post('maincategories')
  postMaincategories( @Req() request: Request) {
    return this.thisService.postMaincategories(request['data']);
  }
  @Post('categories')
  postCategories( @Req() request: Request) {
    return this.thisService.postCategories(request['data']);
  }
  @Post('category')
  postCategory( @Req() request: Request) {
    return this.thisService.postCategory(request['data']);
  }
  @Post('category_specs')
  postCategorySpecs( @Req() request: Request) {
    return this.thisService.postCategorySpecs(request['data']);
  }
  @Post('product')
  postProduct( @Req() request: Request) {
    return this.thisService.postProduct(request['data']);
  }
  @Post('products')
  postProducts( @Req() request: Request) {
    return this.thisService.postProducts(request['data']);
  }
  @Post('products-delete')
  postProductsDelete( @Req() request: Request) {
    return this.thisService.postProductsDelete(request['data']);
  }
  @Post('products-save')
  postProductsSave( @Req() request: Request) {
    return this.thisService.postProductsSave(request['data']);
  }
  @Post('products-update')
  postProducstUpdate( @Req() request: Request) {
    return this.thisService.postProducstUpdate(request['data']);
  }
  @Post('products-stok-price')
  postProductsStokPrice( @Req() request: Request) {
    return this.thisService.postProductsStokPrice(request['data']);
  }
  @Post('orders')
  postOrders( @Req() request: Request) {
    return this.thisService.postOrders(request['data']);
  }
  @Post('order')
  postOrder( @Req() request: Request) {
    return this.thisService.postOrder(request['data']);
  }
}
