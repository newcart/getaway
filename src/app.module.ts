import { Module, NestModule, MiddlewareConsumer ,  CacheModule } from '@nestjs/common';
import { authMiddleware } from "./auth/auth.middleware";
import { cacheMiddleware } from "./cache/cache.middleware";
import { AuthService } from "./auth/auth.basic.service";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrendyolModule } from './rooter/trendyol/trendyol.module';
import { PazaramaModule } from './rooter/pazarama/pazarama.module';
import { StoreModule } from './rooter/store/store.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { UserEntity } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type      : 'postgres',
      schema    : process.env.POSTGRES_SCHEMA,
      host      : process.env.POSTGRES_HOST,
      port      : parseInt(<string>process.env.POSTGRES_PORT),
      username  : process.env.POSTGRES_USER,
      password  : process.env.POSTGRES_PASSWORD,
      database  : process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      retryDelay :10
    }),
      TrendyolModule, PazaramaModule, StoreModule, CacheModule.register()],
  controllers: [AppController],
  providers: [AuthService, AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(authMiddleware).forRoutes('*')
    consumer.apply(cacheMiddleware).forRoutes('*')
  }
}
