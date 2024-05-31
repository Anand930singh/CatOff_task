import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWalletAddressDto {
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  userId: string;
}

export class UpdateWalletAddressDto {
  @IsString()
  address: string;
}
