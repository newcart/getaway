import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USER', transport: Transport.TCP, options: { host: 'user', port: 30102 } },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class TrendyolModule {}
