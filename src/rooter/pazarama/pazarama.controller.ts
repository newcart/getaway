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

}
