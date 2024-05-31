import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { EditUserDto } from './dto/editUser.dto';

@Controller('users') // Defines the base route for all endpoints in this controller
export class UsersController {
    constructor(
        private readonly userService:UsersService // Injects the WalletAddressService into the controller
    ){}

    @Post('createUser')  // Defines a POST endpoint at /walletAddress/setWallet
    async createUser(@Body() body:CreateUserDto){  // Handles POST requests for setting a wallet address
        return await this.userService.createUser(body); // Calls the setWalletAddress method of WalletAddressService
    }

    @Post('deleteUser')
    async DeleteUserDto(@Body() body:DeleteUserDto){
        return await this.userService.deleteUser(body);
    }

    @Post('logginUser')
    async logginUserDto(@Body() body:LoginUserDto){
        return await this.userService.loginUser(body);
    }

    @Post('editUser')
    async editUser(@Body() body:EditUserDto){
        return await this.userService.editUser(body);
    }
}
