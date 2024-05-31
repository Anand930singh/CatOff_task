import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Users } from './user.entity';

@Entity('wallet')
export class WalletAddress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @OneToOne(() => Users, user => user.walletAddress, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: Users;
}
