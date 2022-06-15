import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrendyolModule } from './rooter/trendyol/trendyol.module';
import { PazaramaModule } from './rooter/pazarama/pazarama.module';
import { authMiddleware } from "./auth/auth.middleware";
import { AuthService } from "./auth/auth.basic.service";

@Module({
  imports: [ TrendyolModule, PazaramaModule],
  controllers: [AppController],
  providers: [AuthService, AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(authMiddleware)
        .forRoutes('*');
  }
}
