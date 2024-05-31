import { Body, Controller, Post } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto } from './wallte-address.dto';

@Controller('walletAddress') // Defines the base route for all endpoints in this controller
export class WalletAddressController {
    constructor(
        private readonly walletService:WalletAddressService // Injects the WalletAddressService into the controller
    ){}

    @Post('setWallet')  // Defines a POST endpoint at /walletAddress/setWallet
    async setWalletAddress(@Body() body: CreateWalletAddressDto){ // Handles POST requests for setting a wallet address
        return await this.walletService.setWalletAddress(body); // Calls the setWalletAddress method of WalletAddressService
    }

    @Post('getWallet')
    async getWalletAddress(@Body() body:any){
        return await this.walletService.getWalletAddressByUserId(body);
    }

    @Post('editWallet')
    async editWalletAddress(@Body() body:any){
        return await this.walletService.editWalletAddressByUserId(body);
    }

    @Post('deleteWallet')
    async deleteWalletAddress(@Body() body:any){
        return await this.walletService.deleteWalletAddressByUserId(body);
    }

}
