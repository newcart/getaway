import {Controller, Delete, Get, Post, Put, Req, Request} from '@nestjs/common';
import { StoreService } from './store.service';

@Controller(':user_id')
export class StoreController {
  constructor(
      private readonly thisService: StoreService,
  ) {}
  @Get('store/service_test')
  serviceTest() {
    return this.thisService.serviceTest();
  }
  @Put('store/setup')
  storeSetup() {
    return this.thisService.storeSetup();
  }

  /**
   * City routing
   */
  @Post('city/list')
  serviceCityList( @Req() request: Request ) {
    return this.thisService.serviceCityList(request['data']);
  }
  @Post('city/info')
  serviceCityInfo( @Req() request: Request ) {
    return this.thisService.serviceCityInfo(request['data']);
  }
  @Post('city/save')
  serviceCitySave( @Req() request: Request ) {
    return this.thisService.serviceCitySave(request['data']);
  }
  @Delete('city/remove')
  serviceCityRemove( @Req() request: Request ) {
    return this.thisService.serviceCityRemove(request['data']);
  }

  /**
   * Country routing
   */
  @Post('country/list')
  serviceCountryList( @Req() request: Request ) {
    return this.thisService.serviceCountryList(request['data']);
  }
  @Post('country/info')
  serviceCountryInfo( @Req() request: Request ) {
    return this.thisService.serviceCountryInfo(request['data']);
  }
  @Post('country/save')
  serviceCountrySave( @Req() request: Request ) {
    return this.thisService.serviceCountrySave(request['data']);
  }
  @Delete('country/remove')
  serviceCountryRemove( @Req() request: Request ) {
    return this.thisService.serviceCountryRemove(request['data']);
  }

  /**
   * Microservice routing
   */
  @Post('service/list')
  serviceServiceList( @Req() request: Request ) {
    return this.thisService.serviceServiceList(request['data']);
  }
  @Post('service/info')
  serviceServiceInfo( @Req() request: Request ) {
    return this.thisService.serviceServiceInfo(request['data']);
  }
  @Post('service/save')
  serviceServiceSave( @Req() request: Request ) {
    return this.thisService.serviceServiceSave(request['data']);
  }
  @Delete('service/remove')
  serviceServiceRemove( @Req() request: Request ) {
    return this.thisService.serviceServiceRemove(request['data']);
  }

  /**
   * Store routing
   */
  @Post('store/list')
  serviceStoreList( @Req() request: Request ) {
    return this.thisService.serviceStoreList(request['data']);
  }
  @Post('store/info')
  serviceStoreInfo( @Req() request: Request ) {
    return this.thisService.serviceStoreInfo(request['data']);
  }
  @Post('store/save')
  serviceStoreSave( @Req() request: Request ) {
    return this.thisService.serviceStoreSave(request['data']);
  }
  @Delete('store/remove')
  serviceStoreRemove( @Req() request: Request ) {
    return this.thisService.serviceStoreRemove(request['data']);
  }

  /**
   * Town routing
   */
  @Post('town/list')
  serviceTownList( @Req() request: Request ) {
    return this.thisService.serviceTownList(request['data']);
  }
  @Post('town/info')
  serviceTownInfo( @Req() request: Request ) {
    return this.thisService.serviceTownInfo(request['data']);
  }
  @Post('town/save')
  serviceTownSave( @Req() request: Request ) {
    return this.thisService.serviceTownSave(request['data']);
  }
  @Delete('town/remove')
  serviceTownRemove( @Req() request: Request ) {
    return this.thisService.serviceTownRemove(request['data']);
  }

  /**
   * User routing
   */
  @Post('user/list')
  serviceUserList( @Req() request: Request ) {
    return this.thisService.serviceUserList(request['data']);
  }
  @Post('user/info')
  serviceUserInfo( @Req() request: Request ) {
    return this.thisService.serviceUserInfo(request['data']);
  }
  @Post('user/save')
  serviceUserSave( @Req() request: Request ) {
    return this.thisService.serviceUserSave(request['data']);
  }
  @Delete('user/remove')
  serviceUserRemove( @Req() request: Request ) {
    return this.thisService.serviceUserRemove(request['data']);
  }

  /**
   * UserRole routing
   */
  @Post('user-role/list')
  serviceUserRoleList( @Req() request: Request ) {
    return this.thisService.serviceUserRoleList(request['data']);
  }
  @Post('user-role/info')
  serviceUserRoleInfo( @Req() request: Request ) {
    return this.thisService.serviceUserRoleInfo(request['data']);
  }
  @Post('user-role/save')
  serviceUserRoleSave( @Req() request: Request ) {
    return this.thisService.serviceUserRoleSave(request['data']);
  }
  @Delete('user-role/remove')
  serviceUserRoleRemove( @Req() request: Request ) {
    return this.thisService.serviceUserRoleRemove(request['data']);
  }

  /**
   * UserType routing
   */
  @Post('user-type/list')
  serviceUserTypeList( @Req() request: Request ) {
    return this.thisService.serviceUserTypeList(request['data']);
  }
  @Post('user-type/info')
  serviceUserTypeInfo( @Req() request: Request ) {
    return this.thisService.serviceUserTypeInfo(request['data']);
  }
  @Post('user-type/save')
  serviceUserTypeSave( @Req() request: Request ) {
    return this.thisService.serviceUserTypeSave(request['data']);
  }
  @Delete('user-type/remove')
  serviceUserTypeRemove( @Req() request: Request ) {
    return this.thisService.serviceUserTypeRemove(request['data']);
  }

}
