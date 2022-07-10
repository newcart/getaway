import { Module, NestModule, MiddlewareConsumer ,  CacheModule } from '@nestjs/common';
import { authMiddleware } from "./auth/auth.middleware";
import { cacheMiddleware } from "./cache/cache.middleware";
import { AuthService } from "./auth/auth.basic.service";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrendyolModule } from './rooter/trendyol/trendyol.module';
//import { PazaramaModule } from './rooter/pazarama/pazarama.module';
//import { StoreModule } from './rooter/store/store.module';

@Module({
  imports: [ TrendyolModule, /*PazaramaModule, StoreModule,*/ CacheModule.register()],
  controllers: [AppController],
  providers: [AuthService, AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(authMiddleware).forRoutes('*');
    consumer.apply(cacheMiddleware).forRoutes('*');
  }
}
