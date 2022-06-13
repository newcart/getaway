import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TrendyolController } from './trendyol.controller';
import { TrendyolService } from './trendyol.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'TRENDYOL', transport: Transport.TCP, options: { port: 3101 } },
    ]),
  ],
  controllers: [TrendyolController],
  providers: [TrendyolService],
})
export class TrendyolModule {}
