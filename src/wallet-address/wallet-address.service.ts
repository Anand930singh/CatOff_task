import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { WalletAddress } from 'src/db/entities/walletAddress.entity';
import { CreateWalletAddressDto } from './wallte-address.dto';
import { NotFoundError } from 'rxjs';
import { Users } from 'src/db/entities/user.entity';

// All wallet related CRUD operation buissness logic is written here
@Injectable()
export class WalletAddressService {
    private walletManager : EntityManager
    private userManager : EntityManager
    constructor(
        @Inject('DataSource')
        private dataSource: DataSource
    ){
        this.walletManager=this.dataSource.manager;
        this.userManager=this.dataSource.manager;
    }

    //this function is used to add wallet address for any particular user 
    async setWalletAddress(body: CreateWalletAddressDto){
        try{
            const { address, userId } = body;
        
            // Find the user by ID
            const user = await this.userManager.findOneBy(Users, {id:userId});
            if (!user) {
                throw new NotFoundException('User not found');
            }

            // Check if the user already has a wallet address
            const existingWalletAddress = await this.walletManager.findOne(WalletAddress, { where: { user } });
            if (existingWalletAddress) {
                // throw new ('User already has a wallet address');
            }

            // Create a new wallet address record
            const walletAddress = new WalletAddress();
            walletAddress.address = address;
            walletAddress.user = user;

            // Save the wallet address
            await this.walletManager.save(walletAddress);
            return { message: 'Wallet address created successfully' };
        } catch(e){
            return {
                statusCode: 404,
                message: 'Error',
            };
        }
    }

    //this function is used to get the wallet address using userId
    async getWalletAddressByUserId(body: any) {
        try {
            const { userId } = body;
    
            // Find the user by ID
            const user = await this.userManager.findOneBy(Users, { id: userId });

            if (!user) {
                throw new NotFoundException('User not found');
            }
    
            // Retrieve the user's wallet address
            const userWithRelations = await this.userManager
                .createQueryBuilder(Users, 'user')
                .leftJoinAndSelect('user.walletAddress', 'walletAddress') // Use singular "walletAddress"
                .where('user.id = :userId', { userId })
                .getOne();
    
            if (!userWithRelations) {
                throw new NotFoundException('User not found');
            }
            if(!userWithRelations.walletAddress)
                throw new NotFoundException('Address is not their');
            // Return the wallet address
            return userWithRelations.walletAddress;
        } catch (e) {
            return {
                statusCode: 404,
                message: 'Error',
            };
        }
    }
    
    
    
    //this function is used to edit the wallet address of any particular user
    async editWalletAddressByUserId(body: any) {
        try {
            const { newAddress, userId } = body;

            const user = await this.userManager.findOneBy(Users, {id:userId});
            if (!user) {
                throw new NotFoundException('User not found');
            }

            const walletAddress = await this.walletManager.findOne(WalletAddress, { where: { user } });
            if (!walletAddress) {
                throw new NotFoundException('Wallet address not found');
            }

            walletAddress.address = newAddress;
            await this.walletManager.save(walletAddress);
            return { message: 'Wallet address updated successfully' };
        } catch (e) {
            return {
                statusCode: 404,
                message: 'Error',
            };
        }
    }

    //this function used to delete the wallet address using userId
    async deleteWalletAddressByUserId(body :any) {
        try {
            const {userId } = body;

            const user = await this.userManager.findOneBy(Users, {id:userId});
            if (!user) {
                throw new NotFoundException('User not found');
            }

            const walletAddress = await this.walletManager.findOne(WalletAddress, { where: { user } });
            if (!walletAddress) {
                throw new NotFoundException('Wallet address not found');
            }

            await this.walletManager.remove(walletAddress);
            return { message: 'Wallet address deleted successfully' };
        } catch (e) {
            return {
                statusCode: 404,
                message: 'Error',
            };
        }
    }

}
