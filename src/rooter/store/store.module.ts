import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'STORE', transport: Transport.TCP, options: { host: 'store', port: 30201 } },
    ]),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
