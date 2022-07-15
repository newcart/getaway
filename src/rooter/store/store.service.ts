import {Inject, Injectable, Post, Req} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StoreService {
  constructor(
      @Inject('STORE') private readonly serviceClient: ClientProxy,
  ){}
  /**
   * For Testing
   */
  serviceTest() {
    return this.serviceClient.send('serviceTest', {});
  }
  storeSetup() {
    return this.serviceClient.send('store/setup', {});
  }

  /**
   * For City
   */
  serviceCityList(body) {
    return this.serviceClient.send('city/list', body);
  }
  serviceCityInfo(body) {
    return this.serviceClient.send('city/info', body);
  }
  serviceCitySave(body) {
    return this.serviceClient.send('city/save', body);
  }
  serviceCityRemove(body) {
    return this.serviceClient.send('city/remove', body);
  }

  /**
   * For Country
   */
  serviceCountryList(body) {
    return this.serviceClient.send('country/list', body);
  }
  serviceCountryInfo(body) {
    return this.serviceClient.send('country/info', body);
  }
  serviceCountrySave(body) {
    return this.serviceClient.send('country/save', body);
  }
  serviceCountryRemove(body) {
    return this.serviceClient.send('country/remove', body);
  }

  /**
   * For MicroService
   */
  serviceServiceList(body) {
    return this.serviceClient.send('service/list', body);
  }
  serviceServiceInfo(body) {
    return this.serviceClient.send('service/info', body);
  }
  serviceServiceSave(body) {
    return this.serviceClient.send('service/save', body);
  }
  serviceServiceRemove(body) {
    return this.serviceClient.send('service/remove', body);
  }

  /**
   * For Store
   */
  serviceStoreList(body) {
    return this.serviceClient.send('store/list', body);
  }
  serviceStoreInfo(body) {
    return this.serviceClient.send('store/info', body);
  }
  serviceStoreSave(body) {
    return this.serviceClient.send('store/save', body);
  }
  serviceStoreRemove(body) {
    return this.serviceClient.send('store/remove', body);
  }

  /**
   * For Town
   */
  serviceTownList(body) {
    return this.serviceClient.send('town/list', body);
  }
  serviceTownInfo(body) {
    return this.serviceClient.send('town/info', body);
  }
  serviceTownSave(body) {
    return this.serviceClient.send('town/save', body);
  }
  serviceTownRemove(body) {
    return this.serviceClient.send('town/remove', body);
  }

  /**
   * For User
   */
  serviceUserList(body) {
    return this.serviceClient.send('user/list', body);
  }
  serviceUserInfo(body) {
    return this.serviceClient.send('user/info', body);
  }
  serviceUserSave(body) {
    return this.serviceClient.send('user/save', body);
  }
  serviceUserRemove(body) {
    return this.serviceClient.send('user/remove', body);
  }

  /**
   * For UserRole
   */
  serviceUserRoleList(body) {
    return this.serviceClient.send('user-role/list', body);
  }
  serviceUserRoleInfo(body) {
    return this.serviceClient.send('user-role/info', body);
  }
  serviceUserRoleSave(body) {
    return this.serviceClient.send('user-role/save', body);
  }
  serviceUserRoleRemove(body) {
    return this.serviceClient.send('user-role/remove', body);
  }

  /**
   * For UserType
   */
  serviceUserTypeList(body) {
    return this.serviceClient.send('user-type/list', body);
  }
  serviceUserTypeInfo(body) {
    return this.serviceClient.send('user-type/info', body);
  }
  serviceUserTypeSave(body) {
    return this.serviceClient.send('user-type/save', body);
  }
  serviceUserTypeRemove(body) {
    return this.serviceClient.send('user-type/remove', body);
  }

}
