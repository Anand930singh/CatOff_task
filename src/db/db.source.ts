import {ConfigService} from '@nestjs/config'
import { config } from 'process'
import { DataSource } from 'typeorm'
import { Users } from './entities/user.entity'
import { WalletAddress } from './entities/walletAddress.entity'


//this DbConnect is used to connect the server with localdatabase and all the credentials are stored in .env file
export const DbConnect=[
    {
        provide:'DataSource',
        useFactory: async (configService:ConfigService)=>{
            const dataSource= new DataSource({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port:configService.get('DB_PORT'),
                username:configService.get('DB_USERNAME'),
                password:configService.get('DB_PASSWORD'),
                database:configService.get('DB_NAME'),
                synchronize:true,
                entities:[Users, WalletAddress],
                logging: true,
            })

            return await dataSource.initialize()
        },
        inject:[ConfigService]
    }
]