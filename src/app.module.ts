import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { WalletAddressModule } from './wallet-address/wallet-address.module';
import { WalletAddressController } from './wallet-address/wallet-address.controller';
import { WalletAddressService } from './wallet-address/wallet-address.service';

@Module({
  imports: [DbModule, ConfigModule.forRoot({isGlobal:true}), UsersModule, WalletAddressModule],
  
  // controller array include all the controllers of the project
  controllers: [UsersController, WalletAddressController],

  // providers array include all the services of the project
  providers: [UsersService, WalletAddressService],
})
export class AppModule {}
