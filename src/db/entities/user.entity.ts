import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { WalletAddress } from "./walletAddress.entity";

@Entity('user')
export class Users{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar'})
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => WalletAddress, walletAddress => walletAddress.user)
    walletAddress: WalletAddress; // Change from an array to a single instance
}
