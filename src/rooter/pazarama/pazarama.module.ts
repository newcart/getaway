import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PazaramaController } from './pazarama.controller';
import { PazaramaService } from './pazarama.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'PAZARAMA', transport: Transport.TCP, options: { host: 'pazarama', port: 30102 } },
    ]),
  ],
  controllers: [PazaramaController],
  providers: [PazaramaService],
})
export class PazaramaModule {}
